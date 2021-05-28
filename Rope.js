class Rope {
  constructor(pointA, bodyB) {
    var options = {
      pointA: pointA,
      bodyB: bodyB,
      length: 450,
    };

    this.pointA = pointA;
    this.rope = Constraint.create(options);
    World.add(world, this.rope);
  }

  display() {

      var pointA = this.rope.bodyB.position;
      var pointB = this.pointA;
      push();

      stroke(48, 22, 8);
      strokeWeight(4);

      line(pointA.x, pointA.y-60, pointB.x, pointB.y);

      pop();
    }
  }

