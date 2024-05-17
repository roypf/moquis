class Entity {
  id: number;

  constructor(id: number) {
    this.id = id;
  }

  // Optionally, you can add methods that relate to the 'id' property
  displayId(): void {
    console.log(`The ID of this entity is: ${this.id}`);
  }
}

// Usage
const newEntity = new Entity(123);
newEntity.displayId();
