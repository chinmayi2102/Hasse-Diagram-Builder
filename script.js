/* =====================================================
   HASSE JOURNEY
   ===================================================== */


/* ================= LEVEL DATA ================= */

const levels = {

    1: {
        name: "The Beginning",
        questions: [

            {
                set: ["a", "b", "c"],

                relation: [
                    ["a", "a"],
                    ["b", "b"],
                    ["c", "c"],
                    ["a", "b"],
                    ["b", "c"]
                ],

                covers: [
                    ["a", "b"],
                    ["b", "c"]
                ]
            },

            {
                set: ["p", "q", "r"],

                relation: [
                    ["p", "p"],
                    ["q", "q"],
                    ["r", "r"],
                    ["p", "q"],
                    ["p", "r"]
                ],

                covers: [
                    ["p", "q"],
                    ["p", "r"]
                ]
            },

            {
                set: ["x", "y", "z", "w"],

                relation: [
                    ["x", "x"],
                    ["y", "y"],
                    ["z", "z"],
                    ["w", "w"],
                    ["x", "y"],
                    ["x", "z"],
                    ["y", "w"],
                    ["z", "w"]
                ],

                covers: [
                    ["x", "y"],
                    ["x", "z"],
                    ["y", "w"],
                    ["z", "w"]
                ]
            }

        ]
    },


    2: {
        name: "First Connections",
        questions: [

            {
                set: ["a", "b", "c", "d"],

                relation: [
                    ["a", "a"],
                    ["b", "b"],
                    ["c", "c"],
                    ["d", "d"],
                    ["a", "b"],
                    ["b", "c"],
                    ["c", "d"],
                    ["a", "c"],
                    ["b", "d"],
                    ["a", "d"]
                ],

                covers: [
                    ["a", "b"],
                    ["b", "c"],
                    ["c", "d"]
                ]
            },

            {
                set: ["a", "b", "c", "d", "e"],

                relation: [
                    ["a", "a"],
                    ["b", "b"],
                    ["c", "c"],
                    ["d", "d"],
                    ["e", "e"],
                    ["a", "b"],
                    ["a", "c"],
                    ["b", "d"],
                    ["c", "d"],
                    ["d", "e"]
                ],

                covers: [
                    ["a", "b"],
                    ["a", "c"],
                    ["b", "d"],
                    ["c", "d"],
                    ["d", "e"]
                ]
            },

            {
                set: ["p", "q", "r", "s"],

                relation: [
                    ["p", "p"],
                    ["q", "q"],
                    ["r", "r"],
                    ["s", "s"],
                    ["p", "q"],
                    ["p", "r"],
                    ["q", "s"],
                    ["r", "s"],
                    ["p", "s"]
                ],

                covers: [
                    ["p", "q"],
                    ["p", "r"],
                    ["q", "s"],
                    ["r", "s"]
                ]
            }

        ]
    },


    3: {
        name: "Hidden Links",
        questions: [

            {
                set: ["a", "b", "c", "d", "e"],

                relation: [
                    ["a", "a"],
                    ["b", "b"],
                    ["c", "c"],
                    ["d", "d"],
                    ["e", "e"],
                    ["a", "b"],
                    ["a", "c"],
                    ["b", "d"],
                    ["c", "d"],
                    ["d", "e"],
                    ["a", "d"],
                    ["a", "e"]
                ],

                covers: [
                    ["a", "b"],
                    ["a", "c"],
                    ["b", "d"],
                    ["c", "d"],
                    ["d", "e"]
                ]
            },

            {
                set: ["a", "b", "c", "d"],

                relation: [
                    ["a", "a"],
                    ["b", "b"],
                    ["c", "c"],
                    ["d", "d"],
                    ["a", "b"],
                    ["a", "c"],
                    ["b", "d"],
                    ["c", "d"],
                    ["a", "d"]
                ],

                covers: [
                    ["a", "b"],
                    ["a", "c"],
                    ["b", "d"],
                    ["c", "d"]
                ]
            },

            {
                set: ["a", "b", "c", "d", "e"],

                relation: [
                    ["a", "a"],
                    ["b", "b"],
                    ["c", "c"],
                    ["d", "d"],
                    ["e", "e"],
                    ["a", "b"],
                    ["a", "c"],
                    ["b", "d"],
                    ["c", "e"],
                    ["d", "e"],
                    ["a", "d"],
                    ["a", "e"]
                ],

                covers: [
                    ["a", "b"],
                    ["a", "c"],
                    ["b", "d"],
                    ["c", "e"],
                    ["d", "e"]
                ]
            }

        ]
    },


    4: {
        name: "The Middle Path",
        questions: [

            {
                set: ["a", "b", "c", "d", "e", "f"],

                relation: [
                    ["a", "a"],
                    ["b", "b"],
                    ["c", "c"],
                    ["d", "d"],
                    ["e", "e"],
                    ["f", "f"],
                    ["a", "b"],
                    ["a", "c"],
                    ["b", "d"],
                    ["c", "d"],
                    ["d", "e"],
                    ["d", "f"]
                ],

                covers: [
                    ["a", "b"],
                    ["a", "c"],
                    ["b", "d"],
                    ["c", "d"],
                    ["d", "e"],
                    ["d", "f"]
                ]
            },

            {
                set: ["a", "b", "c", "d", "e"],

                relation: [
                    ["a", "a"],
                    ["b", "b"],
                    ["c", "c"],
                    ["d", "d"],
                    ["e", "e"],
                    ["a", "b"],
                    ["a", "c"],
                    ["b", "d"],
                    ["c", "d"],
                    ["c", "e"]
                ],

                covers: [
                    ["a", "b"],
                    ["a", "c"],
                    ["b", "d"],
                    ["c", "d"],
                    ["c", "e"]
                ]
            },

            {
                set: ["p", "q", "r", "s", "t"],

                relation: [
                    ["p", "p"],
                    ["q", "q"],
                    ["r", "r"],
                    ["s", "s"],
                    ["t", "t"],
                    ["p", "q"],
                    ["p", "r"],
                    ["q", "s"],
                    ["r", "s"],
                    ["s", "t"],
                    ["p", "s"],
                    ["p", "t"]
                ],

                covers: [
                    ["p", "q"],
                    ["p", "r"],
                    ["q", "s"],
                    ["r", "s"],
                    ["s", "t"]
                ]
            }

        ]
    },


    5: {
        name: "Rising Order",
        questions: [

            {
                set: ["a", "b", "c", "d", "e", "f"],

                relation: [
                    ["a", "a"],
                    ["b", "b"],
                    ["c", "c"],
                    ["d", "d"],
                    ["e", "e"],
                    ["f", "f"],
                    ["a", "b"],
                    ["a", "c"],
                    ["b", "d"],
                    ["c", "d"],
                    ["c", "e"],
                    ["d", "f"],
                    ["e", "f"]
                ],

                covers: [
                    ["a", "b"],
                    ["a", "c"],
                    ["b", "d"],
                    ["c", "d"],
                    ["c", "e"],
                    ["d", "f"],
                    ["e", "f"]
                ]
            },

            {
                set: ["a", "b", "c", "d", "e", "f", "g"],

                relation: [
                    ["a", "a"],
                    ["b", "b"],
                    ["c", "c"],
                    ["d", "d"],
                    ["e", "e"],
                    ["f", "f"],
                    ["g", "g"],
                    ["a", "b"],
                    ["a", "c"],
                    ["b", "d"],
                    ["c", "d"],
                    ["d", "e"],
                    ["d", "f"],
                    ["e", "g"],
                    ["f", "g"]
                ],

                covers: [
                    ["a", "b"],
                    ["a", "c"],
                    ["b", "d"],
                    ["c", "d"],
                    ["d", "e"],
                    ["d", "f"],
                    ["e", "g"],
                    ["f", "g"]
                ]
            },

            {
                set: ["1", "2", "3", "4", "6", "12"],

                relation: [
                    ["1", "1"],
                    ["2", "2"],
                    ["3", "3"],
                    ["4", "4"],
                    ["6", "6"],
                    ["12", "12"],
                    ["1", "2"],
                    ["1", "3"],
                    ["1", "4"],
                    ["1", "6"],
                    ["1", "12"],
                    ["2", "4"],
                    ["2", "6"],
                    ["2", "12"],
                    ["3", "6"],
                    ["3", "12"],
                    ["4", "12"],
                    ["6", "12"]
                ],

                covers: [
                    ["1", "2"],
                    ["1", "3"],
                    ["2", "4"],
                    ["2", "6"],
                    ["3", "6"],
                    ["4", "12"],
                    ["6", "12"]
                ]
            }

        ]
    },


    6: {
        name: "The Maze",
        questions: [

            {
                set: ["a", "b", "c", "d", "e", "f"],

                relation: [
                    ["a", "a"],
                    ["b", "b"],
                    ["c", "c"],
                    ["d", "d"],
                    ["e", "e"],
                    ["f", "f"],
                    ["a", "b"],
                    ["a", "c"],
                    ["b", "d"],
                    ["c", "e"],
                    ["d", "f"],
                    ["e", "f"]
                ],

                covers: [
                    ["a", "b"],
                    ["a", "c"],
                    ["b", "d"],
                    ["c", "e"],
                    ["d", "f"],
                    ["e", "f"]
                ]
            },

            {
                set: ["a", "b", "c", "d", "e"],

                relation: [
                    ["a", "a"],
                    ["b", "b"],
                    ["c", "c"],
                    ["d", "d"],
                    ["e", "e"],
                    ["a", "b"],
                    ["a", "c"],
                    ["b", "d"],
                    ["c", "d"],
                    ["d", "e"]
                ],

                covers: [
                    ["a", "b"],
                    ["a", "c"],
                    ["b", "d"],
                    ["c", "d"],
                    ["d", "e"]
                ]
            },

            {
                set: ["p", "q", "r", "s", "t", "u"],

                relation: [
                    ["p", "p"],
                    ["q", "q"],
                    ["r", "r"],
                    ["s", "s"],
                    ["t", "t"],
                    ["u", "u"],
                    ["p", "q"],
                    ["p", "r"],
                    ["q", "s"],
                    ["r", "s"],
                    ["s", "t"],
                    ["s", "u"]
                ],

                covers: [
                    ["p", "q"],
                    ["p", "r"],
                    ["q", "s"],
                    ["r", "s"],
                    ["s", "t"],
                    ["s", "u"]
                ]
            }

        ]
    },


    7: {
        name: "Logic Breaker",
        questions: [

            {
                set: ["a", "b", "c", "d", "e", "f", "g"],

                relation: [
                    ["a", "a"],
                    ["b", "b"],
                    ["c", "c"],
                    ["d", "d"],
                    ["e", "e"],
                    ["f", "f"],
                    ["g", "g"],
                    ["a", "b"],
                    ["a", "c"],
                    ["b", "d"],
                    ["c", "d"],
                    ["c", "e"],
                    ["d", "f"],
                    ["e", "f"],
                    ["f", "g"]
                ],

                covers: [
                    ["a", "b"],
                    ["a", "c"],
                    ["b", "d"],
                    ["c", "d"],
                    ["c", "e"],
                    ["d", "f"],
                    ["e", "f"],
                    ["f", "g"]
                ]
            },

            {
                set: ["a", "b", "c", "d", "e", "f"],

                relation: [
                    ["a", "a"],
                    ["b", "b"],
                    ["c", "c"],
                    ["d", "d"],
                    ["e", "e"],
                    ["f", "f"],
                    ["a", "b"],
                    ["a", "c"],
                    ["b", "d"],
                    ["c", "e"],
                    ["d", "f"],
                    ["e", "f"]
                ],

                covers: [
                    ["a", "b"],
                    ["a", "c"],
                    ["b", "d"],
                    ["c", "e"],
                    ["d", "f"],
                    ["e", "f"]
                ]
            },

            {
                set: ["1", "2", "3", "4", "6", "12"],

                relation: [
                    ["1", "1"],
                    ["2", "2"],
                    ["3", "3"],
                    ["4", "4"],
                    ["6", "6"],
                    ["12", "12"],
                    ["1", "2"],
                    ["1", "3"],
                    ["1", "4"],
                    ["1", "6"],
                    ["1", "12"],
                    ["2", "4"],
                    ["2", "6"],
                    ["2", "12"],
                    ["3", "6"],
                    ["3", "12"],
                    ["4", "12"],
                    ["6", "12"]
                ],

                covers: [
                    ["1", "2"],
                    ["1", "3"],
                    ["2", "4"],
                    ["2", "6"],
                    ["3", "6"],
                    ["4", "12"],
                    ["6", "12"]
                ]
            }

        ]
    },


    8: {
        name: "The Final Gate",
        questions: [

            {
                set: ["a", "b", "c", "d", "e", "f", "g"],

                relation: [
                    ["a", "a"],
                    ["b", "b"],
                    ["c", "c"],
                    ["d", "d"],
                    ["e", "e"],
                    ["f", "f"],
                    ["g", "g"],
                    ["a", "b"],
                    ["a", "c"],
                    ["b", "d"],
                    ["c", "d"],
                    ["c", "e"],
                    ["d", "f"],
                    ["e", "f"],
                    ["f", "g"]
                ],

                covers: [
                    ["a", "b"],
                    ["a", "c"],
                    ["b", "d"],
                    ["c", "d"],
                    ["c", "e"],
                    ["d", "f"],
                    ["e", "f"],
                    ["f", "g"]
                ]
            },

            {
                set: ["a", "b", "c", "d", "e", "f"],

                relation: [
                    ["a", "a"],
                    ["b", "b"],
                    ["c", "c"],
                    ["d", "d"],
                    ["e", "e"],
                    ["f", "f"],
                    ["a", "b"],
                    ["a", "c"],
                    ["b", "d"],
                    ["c", "d"],
                    ["d", "e"],
                    ["d", "f"]
                ],

                covers: [
                    ["a", "b"],
                    ["a", "c"],
                    ["b", "d"],
                    ["c", "d"],
                    ["d", "e"],
                    ["d", "f"]
                ]
            },

            {
                set: ["1", "2", "3", "4", "6", "8", "12", "24"],

                relation: [
                    ["1", "1"],
                    ["2", "2"],
                    ["3", "3"],
                    ["4", "4"],
                    ["6", "6"],
                    ["8", "8"],
                    ["12", "12"],
                    ["24", "24"],
                    ["1", "2"],
                    ["1", "3"],
                    ["1", "4"],
                    ["1", "6"],
                    ["1", "8"],
                    ["1", "12"],
                    ["1", "24"],
                    ["2", "4"],
                    ["2", "6"],
                    ["2", "8"],
                    ["2", "12"],
                    ["2", "24"],
                    ["3", "6"],
                    ["3", "12"],
                    ["3", "24"],
                    ["4", "8"],
                    ["4", "12"],
                    ["4", "24"],
                    ["6", "12"],
                    ["6", "24"],
                    ["8", "24"],
                    ["12", "24"]
                ],

                covers: [
                    ["1", "2"],
                    ["1", "3"],
                    ["2", "4"],
                    ["2", "6"],
                    ["3", "6"],
                    ["4", "8"],
                    ["4", "12"],
                    ["6", "12"],
                    ["8", "24"],
                    ["12", "24"]
                ]
            }

        ]
    },


    9: {
        name: "Master Challenge",
        questions: [

            {
                set: ["a", "b", "c", "d", "e", "f", "g"],

                relation: [
                    ["a", "a"],
                    ["b", "b"],
                    ["c", "c"],
                    ["d", "d"],
                    ["e", "e"],
                    ["f", "f"],
                    ["g", "g"],
                    ["a", "b"],
                    ["a", "c"],
                    ["b", "d"],
                    ["c", "d"],
                    ["c", "e"],
                    ["d", "f"],
                    ["e", "f"],
                    ["f", "g"]
                ],

                covers: [
                    ["a", "b"],
                    ["a", "c"],
                    ["b", "d"],
                    ["c", "d"],
                    ["c", "e"],
                    ["d", "f"],
                    ["e", "f"],
                    ["f", "g"]
                ]
            },

            {
                set: ["1", "2", "3", "4", "6", "8", "12", "24"],

                relation: [
                    ["1", "1"],
                    ["2", "2"],
                    ["3", "3"],
                    ["4", "4"],
                    ["6", "6"],
                    ["8", "8"],
                    ["12", "12"],
                    ["24", "24"],
                    ["1", "2"],
                    ["1", "3"],
                    ["1", "4"],
                    ["1", "6"],
                    ["1", "8"],
                    ["1", "12"],
                    ["1", "24"],
                    ["2", "4"],
                    ["2", "6"],
                    ["2", "8"],
                    ["2", "12"],
                    ["2", "24"],
                    ["3", "6"],
                    ["3", "12"],
                    ["3", "24"],
                    ["4", "8"],
                    ["4", "12"],
                    ["4", "24"],
                    ["6", "12"],
                    ["6", "24"],
                    ["8", "24"],
                    ["12", "24"]
                ],

                covers: [
                    ["1", "2"],
                    ["1", "3"],
                    ["2", "4"],
                    ["2", "6"],
                    ["3", "6"],
                    ["4", "8"],
                    ["4", "12"],
                    ["6", "12"],
                    ["8", "24"],
                    ["12", "24"]
                ]
            }

        ]
    }

};


/* ================= VARIABLES ================= */

let currentLevel = 1;
let currentQuestion = 0;

let studentEdges = [];

let connectMode = false;
let firstSelected = null;

let xp = Number(localStorage.getItem("hasseXP")) || 0;

let completedLevels =
    JSON.parse(localStorage.getItem("hasseCompleted")) || [];


/* ================= SECTION CONTROL ================= */

function showSection(id) {

    document.querySelectorAll(".section").forEach(section => {
        section.classList.remove("active");
    });

    const section = document.getElementById(id);

    if (section) {
        section.classList.add("active");
    }

    if (id === "levelsSection") {
        updateJourney();
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* ================= START GAME ================= */

function startPlaying() {

    updateJourney();

    openLevel(1);
}


/* ================= OPEN LEVEL ================= */

function openLevel(levelNumber) {

    if (levelNumber > 1 &&
        !completedLevels.includes(levelNumber - 1)) {

        alert("Complete the previous gate first.");

        return;
    }

    currentLevel = levelNumber;
    currentQuestion = 0;

    showSection("gameSection");

    loadQuestion();
}


/* ================= LOAD QUESTION ================= */

function loadQuestion() {

    const level = levels[currentLevel];

    if (!level) return;

    const question = level.questions[currentQuestion];

    if (!question) return;


    document.getElementById("gameLevel").textContent =
        "LEVEL " + String(currentLevel).padStart(2, "0");

    document.getElementById("gameTitle").textContent =
        level.name;

    document.getElementById("gameXP").textContent =
        xp;


    document.getElementById("questionNumber").textContent =
        "Question " +
        (currentQuestion + 1) +
        " / " +
        level.questions.length;


    document.getElementById("questionTitle").textContent =
        "Build the correct Hasse diagram";


    document.getElementById("questionText").textContent =
        "Drag the elements into the build area and connect only the correct cover relations.";


    document.getElementById("setDisplay").textContent =
        "A = {" + question.set.join(", ") + "}";


    document.getElementById("relationDisplay").textContent =
        "R = {" +
        question.relation
            .map(pair => "(" + pair[0] + "," + pair[1] + ")")
            .join(", ") +
        "}";


    createElementList(question.set);

    resetDiagram();

    hideResult();
}


/* ================= ELEMENT LIST ================= */

function createElementList(elements) {

    const list = document.getElementById("elementList");

    list.innerHTML = "";

    elements.forEach(element => {

        const chip = document.createElement("div");

        chip.className = "element-chip";

        chip.textContent = element;

        chip.draggable = true;

        chip.dataset.value = element;

        chip.addEventListener("dragstart", event => {

            event.dataTransfer.setData(
                "text/plain",
                element
            );

        });

        list.appendChild(chip);

    });
}


/* ================= DIAGRAM AREA ================= */

function setupDiagramArea() {

    const area = document.getElementById("diagramArea");

    if (!area) return;


    area.addEventListener("dragover", event => {

        event.preventDefault();

    });


    area.addEventListener("drop", event => {

        event.preventDefault();

        const value =
            event.dataTransfer.getData("text/plain");

        if (!value) return;

        const rect = area.getBoundingClientRect();

        const x =
            event.clientX -
            rect.left -
            26;

        const y =
            event.clientY -
            rect.top -
            26;

        createDiagramNode(
            value,
            Math.max(5, x),
            Math.max(5, y)
        );

    });

}


/* ================= CREATE NODE ================= */

function createDiagramNode(value, x, y) {

    const area =
        document.getElementById("diagramArea");

    if (!area) return;


    const existing =
        [...area.querySelectorAll(".diagram-node")]
            .find(node => node.dataset.value === value);

    if (existing) return;


    const node =
        document.createElement("div");

    node.className = "diagram-node";

    node.textContent = value;

    node.dataset.value = value;

    node.style.left = x + "px";

    node.style.top = y + "px";


    makeNodeDraggable(node);

    node.addEventListener("click", event => {

        if (!connectMode) return;

        event.stopPropagation();

        handleNodeConnection(node);

    });


    area.appendChild(node);

}


/* ================= NODE DRAGGING ================= */

function makeNodeDraggable(node) {

    let dragging = false;

    let offsetX = 0;
    let offsetY = 0;


    node.addEventListener("mousedown", event => {

        if (connectMode) return;

        dragging = true;

        const rect =
            node.getBoundingClientRect();

        offsetX =
            event.clientX - rect.left;

        offsetY =
            event.clientY - rect.top;

        node.style.cursor = "grabbing";

    });


    document.addEventListener("mousemove", event => {

        if (!dragging) return;

        const area =
            document.getElementById("diagramArea");

        const rect =
            area.getBoundingClientRect();

        let x =
            event.clientX -
            rect.left -
            offsetX;

        let y =
            event.clientY -
            rect.top -
            offsetY;


        x = Math.max(
            0,
            Math.min(
                x,
                area.clientWidth - node.offsetWidth
            )
        );


        y = Math.max(
            0,
            Math.min(
                y,
                area.clientHeight - node.offsetHeight
            )
        );


        node.style.left = x + "px";

        node.style.top = y + "px";

        drawConnections();

    });


    document.addEventListener("mouseup", () => {

        if (!dragging) return;

        dragging = false;

        node.style.cursor = "grab";

    });

}


/* ================= CONNECT MODE ================= */

function toggleConnectMode() {

    connectMode = !connectMode;

    firstSelected = null;


    const button =
        document.getElementById("connectModeBtn");


    if (connectMode) {

        button.classList.add("active");

        button.textContent =
            "✕ Connecting...";

    } else {

        button.classList.remove("active");

        button.textContent =
            "＋ Connect";

        clearSelectedNode();

    }

}


/* ================= HANDLE CONNECTION ================= */

function handleNodeConnection(node) {

    if (!firstSelected) {

        firstSelected = node;

        node.classList.add("selected");

        return;
    }


    if (firstSelected === node) {

        node.classList.remove("selected");

        firstSelected = null;

        return;
    }


    const first =
        firstSelected.dataset.value;

    const second =
        node.dataset.value;


    const edge =
        normalizeEdge(first, second);


    const alreadyExists =
        studentEdges.some(
            e =>
                e[0] === edge[0] &&
                e[1] === edge[1]
        );


    if (!alreadyExists) {

        studentEdges.push(edge);

    }


    firstSelected.classList.remove("selected");

    firstSelected = null;

    drawConnections();

}


/* ================= NORMALIZE EDGE ================= */

function normalizeEdge(a, b) {

    const aString = String(a);

    const bString = String(b);


    if (
        aString.localeCompare(
            bString,
            undefined,
            { numeric: true }
        ) < 0
    ) {

        return [aString, bString];

    }


    return [bString, aString];

}


/* ================= DRAW CONNECTIONS ================= */

function drawConnections() {

    const svg =
        document.getElementById("connectionLayer");

    const area =
        document.getElementById("diagramArea");


    if (!svg || !area) return;


    svg.innerHTML = "";


    studentEdges.forEach(edge => {

        const nodeA =
            [...area.querySelectorAll(".diagram-node")]
                .find(
                    node =>
                        node.dataset.value === edge[0]
                );


        const nodeB =
            [...area.querySelectorAll(".diagram-node")]
                .find(
                    node =>
                        node.dataset.value === edge[1]
                );


        if (!nodeA || !nodeB) return;


        const x1 =
            nodeA.offsetLeft +
            nodeA.offsetWidth / 2;

        const y1 =
            nodeA.offsetTop +
            nodeA.offsetHeight / 2;


        const x2 =
            nodeB.offsetLeft +
            nodeB.offsetWidth / 2;

        const y2 =
            nodeB.offsetTop +
            nodeB.offsetHeight / 2;


        const line =
            document.createElementNS(
                "http://www.w3.org/2000/svg",
                "line"
            );


        line.setAttribute("x1", x1);

        line.setAttribute("y1", y1);

        line.setAttribute("x2", x2);

        line.setAttribute("y2", y2);

        line.classList.add("connection-line");


        svg.appendChild(line);

    });

}


/* ================= RESET ================= */

function resetDiagram() {

    const area =
        document.getElementById("diagramArea");


    if (!area) return;


    area
        .querySelectorAll(".diagram-node")
        .forEach(node => node.remove());


    studentEdges = [];

    firstSelected = null;

    connectMode = false;


    const button =
        document.getElementById("connectModeBtn");


    if (button) {

        button.classList.remove("active");

        button.textContent =
            "＋ Connect";

    }


    clearSelectedNode();

    drawConnections();

}


/* ================= CLEAR SELECTED ================= */

function clearSelectedNode() {

    document
        .querySelectorAll(".diagram-node.selected")
        .forEach(node =>
            node.classList.remove("selected")
        );

}


/* ================= CHECK ANSWER ================= */

function checkAnswer() {

    const question =
        levels[currentLevel]
            .questions[currentQuestion];


    const correct =
        question.covers.map(
            edge => normalizeEdge(edge[0], edge[1])
        );


    const student =
        studentEdges.map(
            edge => normalizeEdge(edge[0], edge[1])
        );


    const correctSet =
        new Set(
            correct.map(edge => edge.join("|"))
        );


    const studentSet =
        new Set(
            student.map(edge => edge.join("|"))
        );


    const missing =
        [...correctSet]
            .filter(edge => !studentSet.has(edge));


    const extra =
        [...studentSet]
            .filter(edge => !correctSet.has(edge));


    const perfect =
        missing.length === 0 &&
        extra.length === 0;


    const resultBox =
        document.getElementById("resultBox");


    const resultIcon =
        document.getElementById("resultIcon");


    const resultTitle =
        document.getElementById("resultTitle");


    const resultMessage =
        document.getElementById("resultMessage");


    resultBox.classList.add("show");


    if (perfect) {

        resultIcon.textContent = "✓";

        resultTitle.textContent =
            "Perfect Diagram!";

        resultMessage.textContent =
            "Every connection is a correct cover relation.";

        resultIcon.style.color =
            "var(--success)";


        const earnedXP = 100;

        xp += earnedXP;

        localStorage.setItem(
            "hasseXP",
            xp
        );


        document.getElementById("gameXP").textContent =
            xp;


        document.getElementById("solutionText").textContent =
            question.covers
                .map(edge => edge.join(" — "))
                .join(", ");


        document
            .getElementById("solutionBox")
            .classList.add("show");


        document
            .getElementById("continueBtn")
            .classList.add("show");


    } else {

        resultIcon.textContent = "×";

        resultTitle.textContent =
            "Not Quite";

        let message =
            "Check your connections carefully.";


        if (extra.length > 0) {

            message +=
                " You have an extra connection.";

        }


        if (missing.length > 0) {

            message +=
                " Some cover relations are missing.";

        }


        resultMessage.textContent =
            message;


        resultIcon.style.color =
            "var(--danger)";


        document
            .getElementById("solutionBox")
            .classList.remove("show");


        document
            .getElementById("continueBtn")
            .classList.remove("show");

    }

}


/* ================= CONTINUE ================= */

function continueLevel() {

    const level =
        levels[currentLevel];


    currentQuestion++;


    if (
        currentQuestion <
        level.questions.length
    ) {

        loadQuestion();

        return;

    }


    completeLevel();

}


/* ================= COMPLETE LEVEL ================= */

function completeLevel() {

    if (!completedLevels.includes(currentLevel)) {

        completedLevels.push(currentLevel);

        localStorage.setItem(
            "hasseCompleted",
            JSON.stringify(completedLevels)
        );

    }


    alert(
        "Gate cleared! The next level is now unlocked."
    );


    if (currentLevel < 9) {

        currentLevel++;

        currentQuestion = 0;

        loadQuestion();

    } else {

        alert(
            "👑 Master Challenge completed! You mastered Hasse diagrams."
        );

        showSection("levelsSection");

    }


    updateJourney();

}


/* ================= HIDE RESULT ================= */

function hideResult() {

    document
        .getElementById("resultBox")
        .classList.remove("show");


    document
        .getElementById("solutionBox")
        .classList.remove("show");


    document
        .getElementById("continueBtn")
        .classList.remove("show");

}


/* ================= JOURNEY UPDATE ================= */

function updateJourney() {

    for (let i = 1; i <= 8; i++) {

        const checkpoint =
            document.getElementById(
                "checkpoint" + i
            );


        if (!checkpoint) continue;


        checkpoint.classList.remove(
            "locked",
            "completed"
        );


        if (completedLevels.includes(i)) {

            checkpoint.classList.add(
                "completed"
            );

        }


        if (
            i > 1 &&
            !completedLevels.includes(i - 1)
        ) {

            checkpoint.classList.add(
                "locked"
            );

        }

    }


    const master =
        document.getElementById("masterGate");


    if (master) {

        if (
            completedLevels.includes(8)
        ) {

            master.classList.remove("locked");

        } else {

            master.classList.add("locked");

        }

    }


    const progress =
        completedLevels.length;


    const progressText =
        document.getElementById(
            "journeyProgress"
        );


    const fill =
        document.getElementById(
            "journeyFill"
        );


    if (progressText) {

        progressText.textContent =
            progress + " / 9";

    }


    if (fill) {

        fill.style.width =
            ((progress / 9) * 100) + "%";

    }

}


/* ================= THEME ================= */

function toggleTheme() {

    document.body.classList.toggle("light");


    const isLight =
        document.body.classList.contains("light");


    localStorage.setItem(
        "hasseTheme",
        isLight ? "light" : "dark"
    );


    document.getElementById("themeBtn").textContent =
        isLight ? "☀" : "☾";

}


/* ================= LOAD SAVED THEME ================= */

function loadTheme() {

    const theme =
        localStorage.getItem("hasseTheme");


    if (theme === "light") {

        document.body.classList.add("light");

        document.getElementById("themeBtn").textContent =
            "☀";

    }

}


/* ================= INITIALIZE ================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        setupDiagramArea();

        loadTheme();

        updateJourney();

    }
);