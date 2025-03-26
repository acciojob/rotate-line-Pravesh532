//your JS code here. If required.
 let angle = 0;
        const line = document.getElementById("line");

        function rotateLine() {
            angle += 2; // Increase rotation angle
            line.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
        }

        setInterval(rotateLine, 20); 