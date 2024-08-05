
function reflex_agent(location, state) {
    if (state === "DIRTY") {
        return 'CLEAN';
    } else if (location === 'A') {
        return 'RIGHT';
    } else if (location === 'B') {
        return 'LEFT';
    }
}

function reflex_agent_D(location, state) {
    if (state === "CLEAN") {
        return 'DIRTY';
    } else if (location === 'A') {
        return 'RIGHT';
    } else if (location === 'B') {
        return 'LEFT';
    }
}

function test(states) {
    let ensuciar = false;
    const interval = setInterval(() => {
        let location = states[0];
        let state = (location === 'A') ? states[1] : states[2];
        
        if (ensuciar) {
            let action = reflex_agent_D(location, state);
	    document.getElementById("log").innerHTML+="<br>Location: ".concat(location).concat(" | Action: ").concat(action);
            
            if (action === "DIRTY") {
                if (location === 'A') {
                    states[1] = "DIRTY";
                } else if (location === 'B') {
                    states[2] = "DIRTY";
                }
            } else if (action === "RIGHT") {
                states[0] = 'B'; // Aquí de A me vengo a B
            } else if (action === "LEFT") {
                states[0] = 'A'; // Aquí de B me vengo a A
            }
            
            // Activar banderita de que ya se limpió todo
	    document.getElementById("log").innerHTML+="<br>Nos iremos a limpiar";
            ensuciar = false;
        } else {
            let action = reflex_agent(location, state);
            document.getElementById("log").innerHTML+="<br>Location: ".concat(location).concat(" | Action: ").concat(action);
            
            if (action === "CLEAN") {
                if (location === 'A') {
                    states[1] = "CLEAN";
                } else if (location === 'B') {
                    states[2] = "CLEAN";
                }
            } else if (action === "RIGHT") {
                states[0] = 'B'; // Aquí de A me vengo a B
            } else if (action === "LEFT") {
                states[0] = 'A'; // Aquí de B me vengo a A
            }
            
            // Activar banderita de que ya se limpió todo
            document.getElementById("log").innerHTML+="<br>Nos iremos a ensuciar";
            ensuciar = true;
        }
    }, 3000);
}

test(['A', 'DIRTY', 'DIRTY']);
