

const initialState = {
    notes: ["Proper Note 1",
        "Proper Note 2",
        "😀",
        "",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rhoncus ante metus, vel consectetur urna mollis ut. Fusce vel massa vestibulum, viverra sem eget, gravida lectus. Aliquam ac dui non."],
    newNoteValue: "",
    isHidden: true
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ("ADD_NOTE"): {
            action.event.preventDefault();
            let noteToAdd = state.newNoteValue;
            return {
                ...state,
                notes: state.notes.concat(noteToAdd),
                newNoteValue: ""
            }
        }
        case ("DELETE_NOTE"): { 
            let array = [state.notes]; // make a separate copy of the array
            array.splice(action.index, 1);
            return({ 
                ...state,
                notes: array 
            });
        }
        case ("HANDLE_CHANGE"): {
            return {
                ...state,
                newNoteValue: action.event.target.value
            }
        }
        case ("HANDLE_MIN_MAX"): {
            if (state.isHidden) {
                return {
                    ...state,
                    isHidden: false
                }
            }
            else {
                return {
                    ...state,
                    isHidden: true
                }
            }
        }
        default: return state;

    }
}


export default reducer;