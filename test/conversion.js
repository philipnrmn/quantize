import {expect} from 'chai';

import {ctom, mtoc} from '../src/convert';

describe('chronos to metronome', function () {

  beforeEach(function () {
    this.config = ctom({
      name: 'job-id',
      description: 'job description',
      command: 'sleep 1234',
      cpus: 0.1,
      mem: 128,
      disk: 32
    });
  });

  it('id -> name', function () {
    expect(this.config.id).to.equal('job-id');
  });

  it('description -> description', function () {
    expect(this.config.description).to.equal('job description');
  });

  it('command -> run.cmd', function () {
    expect(this.config.run.cmd).to.equal('sleep 1234');
  });

  it('cpus -> run.cpus', function () {
    expect(this.config.run.cpus).to.equal(0.1);
  });

  it('mem -> run.mem', function () {
    expect(this.config.run.mem).to.equal(128);
  });

  it('disk -> run.disk', function () {
    expect(this.config.run.disk).to.equal(32);
  });

});
