// 1. The Parent Constructor
function Component(anchorElementId, store) {
    this.anchor = document.getElementById(anchorElementId);
    this.store = store;
}

Component.prototype.clear = function() {
    if (this.anchor) this.anchor.innerHTML = '';
};

// 2. The Child Constructor
function ProductList(anchorElementId, store) {
    // LINK 1: Inherit properties. 
    // We run the Component function but force 'this' to point to our new ProductList instance.
    Component.call(this, anchorElementId, store);
}

// LINK 2: Inherit methods.
// This sets up the prototype chain so ProductList can access Component's methods.
ProductList.prototype = Object.create(Component.prototype);

// CRITICAL STEP: Object.create overwrites the constructor pointer, so we must reset it manually.
ProductList.prototype.constructor = ProductList;

// 3. Add a custom method unique to the ProductList
ProductList.prototype.render = function() {
    const currentState = this.store.getState();
    console.log("Rendering items from store:", currentState);
};

// Mock store for testing
const mockStore = { getState: () => ({ items: ['Laptop', 'Phone'] }) };

// Create a mock anchor element in the DOM for testing (or pass a fake ID)
const p = new ProductList("app-root", mockStore);

console.log("Did it inherit store?", p.store);  // Should output your mock store object
console.log("Can it call clear?", typeof p.clear); // Should output 'function' (inherited from Component)
p.render(); // Should output: Rendering items from store: { items: ['Laptop', 'Phone'] }