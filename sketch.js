const originalDat = [
    0.5,
    0.5,
    217.113,
    16.4414,
    14.168,
    16.9414,
    181.059,
    19.414099999999998,
    28.4297,
    36.3555,
    55.668000000000006,
    10.695300000000003,
    158.977,
    36.3555,
    7.920999999999992,
    25.7539,
    36.5547,
    47.0508,
    42.98440000000001,
    15.058599999999998,
    31.9961,
    62.1094,
    144.4099,
    8.714800000000004,
    23.2891,
    70.8242,
    159.10590000000002,
    48.25779999999999,
    15.918,
    119.082,
    83.43360000000001,
    106.715,
    20.1875,
    225.797,
    71.4023,
    13.973000000000013,
    102.844,
    119.082,
    85.37100000000001,
    32.206999999999994,
    102.844,
    151.289,
    89.25400000000002,
    33.762,
    24.9766,
    239.77,
    14.613199999999996,
    19.456999999999965,
    47.6055,
    239.77,
    11.7851,
    13.561999999999983,
    64.5781,
    239.77,
    27.01169999999999,
    20.635999999999996,
    66.4609,
    260.406,
    21.2149,
    41.01600000000002,
    69.2891,
    301.422,
    6.367199999999997,
    15.557999999999993,
    79.4258,
    301.422,
    6.6015000000000015,
    25.456999999999994,
    64.5781,
    316.98,
    12.492199999999997,
    4.949999999999989,
    75.6563,
    326.879,
    13.4375,
    9.430000000000007,
    75.3047,
    336.309,
    6.308599999999998,
    9.069999999999993,
    84.3086,
    336.309,
    5.960899999999995,
    8.553999999999974,
    52.375,
    253.332,
    5.257800000000003,
    15.425999999999988,
    21.1602,
    259.227,
    27.351499999999998,
    7.675000000000011,
    20.1875,
    266.902,
    5.609400000000001,
    7.883000000000038,
    28.5781,
    266.902,
    5.718800000000002,
    14.012,
    38.7773,
    266.902,
    4.636800000000001,
    10.199999999999989,
    22.9922,
    280.914,
    17.331999999999997,
    5.149000000000001,
    27.1875,
    286.063,
    5.093800000000002,
    27.351,
    27.1875,
    313.414,
    4.468800000000002,
    10.819999999999993,
    34.8359,
    286.063,
    9.351599999999998,
    10.355000000000018,
    35.5313,
    296.418,
    7.882799999999996,
    7.879000000000019,
    105.641,
    185.051,
    13.077999999999989,
    11.426000000000016,
    104.254,
    196.477,
    4.358999999999995,
    6.100999999999999,
    109.813,
    196.477,
    4.959999999999994,
    19.429000000000002,
    106.434,
    215.906,
    10.968000000000004,
    6.2309999999999945,
    109.813,
    222.137,
    3.600999999999999,
    6.61699999999999,
    181.543,
    185.051,
    12.843999999999994,
    19.719000000000023,
    183.684,
    204.77,
    5.753999999999991,
    14.252999999999986,
    179.27,
    219.023,
    15.11699999999999,
    8.622000000000014,
    180.207,
    227.645,
    4.546999999999997,
    7.889999999999986,
    189.438,
    227.645,
    4.414000000000016,
    6.420999999999992,
    123.215,
    185.051,
    20.335999999999984,
    52.625,
    137.531,
    237.676,
    9.937999999999988,
    11.238,
    127.766,
    237.676,
    8.159999999999982,
    24.215000000000032,
    152.379,
    185.051,
    23.414000000000016,
    68.81200000000001,
    156.125,
    253.863,
    14.38300000000001,
    14.382999999999981,
    159.605,
    268.246,
    9.497000000000014,
    10.367000000000019,
    121.609,
    261.891,
    19.132999999999996,
    16.72199999999998,
    116.395,
    278.613,
    59.39800000000001,
    10.702999999999975,
    166.961,
    289.316,
    12.308999999999997,
    21.00400000000002,
    170.508,
    310.32,
    5.284999999999997,
    12.843999999999994,
    113.414,
    289.316,
    11.941000000000003,
    10.5,
    118.668,
    299.816,
    5.35199999999999,
    13.715000000000032,
    115.59,
    313.531,
    10.432999999999993,
    6.555000000000007,
    131.176,
    289.316,
    30.703000000000003,
    38.12900000000002,
    130.305,
    327.445,
    14.581999999999994,
    9.899000000000001,
    150.641,
    327.445,
    14.984000000000009,
    9.899000000000001,
    137.598,
    337.344,
    22.74199999999999,
    9.764999999999986,
    138.867,
    347.109,
    4.6839999999999975,
    14.180000000000007,
    147.469,
    347.109,
    3.975999999999999,
    10.301000000000045,
    153.852,
    347.109,
    4.948999999999984,
    10.301000000000045
];

let dat;
let img;
let engine;
let canvas;
let rects;
let ground;
let mouseConstraint;
let floorY = 0;

function preload() {
    img = loadImage("dependency_2x.png",
        () => console.log("Image loaded successfully."),
        (e) => {
            console.warn("Could not load dependency_2x.png, using fallback placeholder.");
            img = createImage(800, 600);
            img.loadPixels();
            for (let i = 0; i < img.width; i++) {
                for (let j = 0; j < img.height; j++) {
                    img.set(i, j, color(248, 250, 252));
                }
            }
            img.updatePixels();
        }
    );
}

const palettes = [
    { c1: '#FF3366', c2: '#FF9933', dark: '#990022' }, // Pink-Orange
    { c1: '#00C9FF', c2: '#92FE9D', dark: '#005577' }, // Cyan-Green
    { c1: '#7F00FF', c2: '#E100FF', dark: '#330066' }, // Purple-Pink
    { c1: '#FEE140', c2: '#FA709A', dark: '#884400' }, // Yellow-Pink
    { c1: '#00DBDE', c2: '#FC00FF', dark: '#004455' }  // Teal-Magenta
];

// This sketch will use only rectangles.
function createRect(x, y, w, h) {
    const newBody = Matter.Bodies.rectangle(x, y, w, h);
    Matter.Composite.add(engine.world, newBody);

    return {
        body: newBody,
        w: w,
        h: h,
        theme: random(palettes)
    };
}

function resetSketch() {
    if (engine) {
        Matter.World.clear(engine.world);
        Matter.Engine.clear(engine);
    }

    if (mouseConstraint && mouseConstraint.mouse) {
        Matter.Mouse.clearSourceEvents(mouseConstraint.mouse);
    }

    engine = Matter.Engine.create();
    engine.positionIterations = 1000;
    engine.velocityIterations = 1000;

    // Clone original data since mutates happen
    dat = [...originalDat];

    // Apply responsive full screen scaling and centering
    let baseWidth = 240;
    let baseHeight = 400;

    // Padding for breathable full screen design
    let paddingX = width * 0.1;
    let paddingY = height * 0.15;

    let scaleX = (width - paddingX) / baseWidth;
    let scaleY = (height - paddingY) / baseHeight;
    let customScale = min(scaleX, scaleY);

    for (let idx = 0; idx < dat.length; ++idx) {
        dat[idx] *= 1.07 * customScale;
    }

    let minX = Infinity;
    let maxX = -Infinity;
    for (let idx = 0; idx < dat.length; idx += 4) {
        let x = dat[idx];
        let w = dat[idx + 2];
        if (x < minX) minX = x;
        if (x + w > maxX) maxX = x + w;
    }

    let stackWidth = maxX - minX;
    let offsetX = (width - stackWidth) / 2 - minX;
    let gapFloor = paddingY / 2;
    floorY = height - gapFloor;

    for (let idx = 0; idx < dat.length; idx += 4) {
        // Position relative to floor
        dat[idx + 1] = height - dat[idx + 1] - dat[idx + 3] - gapFloor;
        dat[idx] += offsetX;
    }

    rects = [];

    // Create a "ground plane" at the bottom centre of the canvas
    ground = createRect(width / 2, height - gapFloor + 50, width * 2, 100);
    Matter.Body.setStatic(ground.body, true);

    for (let idx = 0; idx < dat.length; idx += 4) {
        const r = createRect(
            dat[idx] + 0.5 * dat[idx + 2],
            dat[idx + 1] + 0.5 * dat[idx + 3],
            dat[idx + 2],
            dat[idx + 3]
        );
        Matter.Body.setStatic(r.body, true);
        rects.push(r);
    }

    Matter.Engine.update(engine);

    // Virtual object that represents the mouse
    const theMouse = Matter.Mouse.create(canvas.elt);
    theMouse.pixelRatio = pixelDensity();
    // A constraint that ties the mouse to bodies on demand
    mouseConstraint = Matter.MouseConstraint.create(engine, {
        mouse: theMouse,
    });
    // Add the constraint to the world
    Matter.Composite.add(engine.world, mouseConstraint);

    Matter.Events.on(mouseConstraint, "mousedown", function () {
        for (let r of rects) {
            Matter.Body.setStatic(r.body, false);
        }
    });
}

function setup() {
    // We use parent container for CSS styling
    let container = select('#sketch-parent');
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent(container);

    // Bind the reset button functionality
    let resetBtn = select('#reset-btn');
    if (resetBtn) {
        resetBtn.mousePressed(resetSketch);
    }

    resetSketch();
}

function drawBox(re, isReflection) {
    let w = re.w;
    let h = re.h;
    let depth = 8; // 3D extrusion pseudo-depth

    // Draw 3D side face for depth illusion
    if (!isReflection) {
        noStroke();
        fill(re.theme.dark);
        push();
        translate(depth, depth);
        rect(-w / 2, -h / 2, w, h, 6);
        pop();
    }

    // Front face with gradient
    let grad = drawingContext.createLinearGradient(-w / 2, -h / 2, w / 2, h / 2);
    grad.addColorStop(0, re.theme.c1);
    grad.addColorStop(1, re.theme.c2);

    drawingContext.fillStyle = grad;

    // Outer glow / shadow
    if (!isReflection) {
        drawingContext.shadowBlur = 15;
        drawingContext.shadowColor = "rgba(0,0,0,0.4)";
        drawingContext.shadowOffsetY = 8;
        drawingContext.shadowOffsetX = 4;
    } else {
        drawingContext.shadowBlur = 0;
        drawingContext.shadowColor = "transparent";
    }

    stroke(255, 255, 255, 120); // Glassy highlight border
    strokeWeight(1.5);
    rect(-w / 2, -h / 2, w, h, 6);

    // Clear shadow for internal highlight
    drawingContext.shadowBlur = 0;
    drawingContext.shadowColor = "transparent";
    drawingContext.shadowOffsetY = 0;
    drawingContext.shadowOffsetX = 0;

    // Specular highlight (Glass reflection)
    noStroke();
    fill(255, 255, 255, 60);
    beginShape();
    vertex(-w / 2 + 2, -h / 2 + 6);
    quadraticVertex(-w / 2 + 2, -h / 2 + 2, -w / 2 + 6, -h / 2 + 2);
    lineTo(w / 2 - 6, -h / 2 + 2);
    quadraticVertex(w / 2 - 2, -h / 2 + 2, w / 2 - 2, -h / 2 + 6);
    bezierVertex(w / 2 - 2, -h / 4, -w / 2 + 2, 0, -w / 2 + 2, -h / 2 + 6);
    endShape(CLOSE);
}

function draw() {
    clear();

    // Draw background image imitating 'object-fit: cover'
    if (img) {
        let imgRatio = img.width / img.height;
        let canvasRatio = width / height;
        let dw = width, dh = height, dx = 0, dy = 0;

        if (imgRatio > canvasRatio) {
            dw = height * imgRatio;
            dx = (width - dw) / 2;
        } else {
            dh = width / imgRatio;
            dy = (height - dh) / 2;
        }
        image(img, dx, dy, dw, dh);
    }

    Matter.Engine.update(engine);

    // Floor rendering
    noStroke();
    let floorGrad = drawingContext.createLinearGradient(0, floorY, 0, height);
    floorGrad.addColorStop(0, "rgba(20, 20, 30, 0.7)");
    floorGrad.addColorStop(1, "rgba(5, 5, 10, 0.95)");
    drawingContext.fillStyle = floorGrad;
    rect(0, floorY, width, height - floorY);

    // Glossy floor line
    stroke(255, 255, 255, 40);
    strokeWeight(1);
    line(0, floorY, width, floorY);

    rectMode(CENTER);

    // Dynamic ground shadows
    noStroke();
    for (let re of rects) {
        let x = re.body.position.x;
        let y = re.body.position.y;

        // Calculate distance from bottom of object to floor
        let distToFloor = floorY - y - re.h / 2;
        if (distToFloor > -re.h) {
            let maxDist = height * 0.8;
            let intensity = map(constrain(distToFloor, 0, maxDist), 0, maxDist, 180, 0);
            let sWidth = re.w + map(constrain(distToFloor, 0, maxDist), 0, maxDist, 0, re.w * 1.5);
            let sHeight = map(constrain(distToFloor, 0, maxDist), 0, maxDist, 8, 30);

            fill(0, 0, 0, intensity);
            ellipse(x + distToFloor * 0.1, floorY, sWidth, sHeight);
        }
    }

    // Floor reflections
    push();
    drawingContext.save();
    // Clip drawing area to below the floor
    drawingContext.beginPath();
    drawingContext.rect(0, floorY, width, height - floorY);
    drawingContext.clip();

    for (let re of rects) {
        let x = re.body.position.x;
        let y = re.body.position.y;
        let angle = re.body.angle;

        let reflectedY = floorY + (floorY - y);

        push();
        translate(x, reflectedY);
        scale(1, -1);
        rotate(angle);

        // Opacity for reflection
        let distCenter = floorY - y;
        drawingContext.globalAlpha = map(abs(distCenter), 0, height / 2, 0.6, 0);
        if (drawingContext.globalAlpha > 0) {
            drawBox(re, true);
        }
        pop();
    }
    drawingContext.restore();
    pop();

    // Reset alpha for regular objects
    drawingContext.globalAlpha = 1.0;

    // Draw main objects
    for (let re of rects) {
        push();
        translate(re.body.position.x, re.body.position.y);
        rotate(re.body.angle);
        drawBox(re, false);
        pop();
    }

    rectMode(CORNER);
    noFill();
    strokeWeight(2);
    // Dark animated border maybe? Removed lighter border that looks bad, make it sleek.
    stroke(255, 255, 255, 30);
    rect(0, 0, width, height);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    resetSketch();
}
