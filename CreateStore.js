function createStore(initialState){
    let state = structuredClone(initialState);
    return {
        getState: function(){
            return structuredClone(state);
        },
        updateState: function(key, value){
            state[key] = value;
            return structuredClone(state);
        }
    }
}

// --- THE CRASH TEST ---
const store = createStore({ 
    user: { name: "Alice", role: "Admin" }, 
    cart: [] 
});

const externalData = store.getState();

// Try to maliciously or accidentally mutate the nested property
externalData.user.name = "Bob"; 

// Verify if the private state remained safe
console.log("External modified data:", externalData.user.name); // "Bob"
console.log("Internal private store data:", store.getState().user.name); // Should still be "Alice"