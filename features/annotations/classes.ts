// public - можно использовать вне класса, private можно использовать только внутри класса, protected - внутри класса и в childs

class Vehicle {
  // public drive(): void {
  //   console.log('chugga chugga');
  // }
  // color: string;

  // constructor(color: string) {
  //   this.color = color;
  // }
  constructor(public color: string) {}

  protected honk(): void {
    console.log('beep');
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log('vroom');
  }

  public startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

// vehicle.drive();
// vehicle.honk();

const car = new Car(4, 'red');
car.startDrivingProcess();
// car.honk();
