process.env.NODE_ENV = "test";

describe("Task", function() {
  var Task = require("../../models").task;

  beforeEach(function() {
    Task.sync();
  });

  afterEach(function() {
    Task.destroy({ truncate: true });
  });

  it("create", function() {
    Task.create({ title: 'a title' }).then(function(task) {
      expect(task.title).toBe('a title');
    });
  });
});

