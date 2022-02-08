class Assignment {
  make(builder) {
    this.subject = builder.buildSubject();
    this.level = builder.buildLevel();
    this.dueDate = builder.buildDate();
    this.announcement = function () {
      console.log(
        `Your ${this.subject} assignment's difficulty level is: ${this.level}. It is due on ${this.dueDate}.`
      );
    };
    return this;
  }
}

class AssignmentBuilder {
  constructor(subject, level, dueDate) {
    this.subject = subject;
    this.level = level;
    this.dueDate = dueDate;
  }
  buildSubject() {
    return this.subject;
  }
  buildLevel() {
    return this.level;
  }
  buildDate() {
    return this.dueDate;
  }
}

try {
  var assignment = new Assignment();
  var assignmentBuilder = new AssignmentBuilder(
    "Math",
    "Hard",
    "12th June, 2020"
  );
  var mathAssignment = assignment.make(assignmentBuilder);
  mathAssignment.announcement();
} catch (e) {
  console.log(e);
}
