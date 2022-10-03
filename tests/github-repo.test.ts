import chai from 'chai';
import chaiHttp from 'chai-http';

import app from "../src/app";


const expect = chai.expect;
chai.use(chaiHttp);

describe('github repo test', () => {
  it('should contain the required properties if repo and owner name exist', (done) => {
    chai.request(app)
      .get("/github/kaindl-bau/water-pipe-burst")
      .end((err, res) => {
        expect(res.body).to.have.property('repo_name');
        expect(res.body).to.have.property('num_of_stars');
        expect(res.body).to.have.property('description');
        done();
      });
  });
  it('should have the required structure if owner and repo name exist', (done) => {
    chai.request(app)
      .get("/github/kaindl-bau/water-pipe-burst")
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an("object");
        expect(res.body).to.not.be.empty;
        done();
      });
  });
  it('should have property status and message if not found', (done) => {
    chai.request(app)
      .get("/github/kaindl-bau/water-pipe-burs")
      .end((err, res) => {
        expect(res.body).to.have.property('message');
        expect(res.body).to.have.property('status');
        done();
      });
  });
  it('should return proper message if not found', (done) => {
    chai.request(app)
      .get("/github/kaindl-bau/water-pipe-burs")
      .end((err, res) => {
        expect(res.status).to.equal(404);
        expect(res.body.message).to.equal("Not Found");
        done();
      });
  });
  it('Properties should have the correct values', (done) => {
    chai.request(app)
      .get("/github/udacity/DevOps_Microservices")
      .end((err, res) => {
        expect(res.body.repo_name).to.equal("DevOps_Microservices");
        expect(res.body.num_of_stars).to.equal(167);
        expect(res.body.description).to.equal("Supporting material and projects for a course on Cloud DevOps: Microservices.");
        done();
      });
  });
  it('should contain the required structure if username exist', (done) => {
    chai.request(app)
      .get("/github/chinemeze847")
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an("array");
        expect(res.body).to.not.be.empty;
        done();
      });
  });
  it('First object in the array should equal', (done) => {
    chai.request(app)
      .get("/github/benawad/")
      .end((err, res) => {
        expect(res.body[0].repo_name).to.equal("accounts");
        expect(res.body[0].num_of_stars).to.equal(6);
        expect(res.body[0].description).to.equal("Fullstack authentication and accounts-management for Javascript.");
        done();
      });
  });
  it('Should return this status if not found', (done) => {
    chai.request(app)
      .get("/github/chinemeze84")
      .end((err, res) => {
        expect(res.status).to.equal(404);
        expect(res.body.message).to.equal("Username Not Found");
        done();
      });
  });
  it('Should return proper structure if repos are found', (done) => {
    chai.request(app)
      .get("/github/benawad/repos?repo=dogehouse&repo=vsinder&repo=twitch-chat-jeopardy")
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an("array");
        expect(res.body).to.not.be.empty;
        done();
      });
  });
  it('Should return proper structure if repos are found', (done) => {
    chai.request(app)
      .get("/github/benawad/repos?repo=dogehouse&repo=vsinder&repo=twitch-chat-jeopardy")
      .end((err, res) => {
        expect(res.body[0].repo_name).to.equal("dogehouse");
        expect(res.body[0].num_of_stars).to.equal(9166);
        expect(res.body[0].description).to.equal("Taking voice conversations to the moon 🚀");
        done();
      });
  });

});