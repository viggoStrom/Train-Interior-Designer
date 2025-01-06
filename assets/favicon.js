
const fav = document.querySelector(".favicon");
/** @type {CanvasRenderingContext2D} */
const ctx = fav.getContext("2d");

fav.width = 256;
fav.height = 256;

ctx.fillStyle = "#09ccec";
ctx.strokeStyle = "#09ccec";
ctx.lineWidth = 5;

// I'm gonna make a gear
for (let i = 0; i < 360; i++) {
    const radius = 128 - 32;
    const width = 32;

    const degreeSpan = 1;

    const outx1 = 128 + Math.cos((i - degreeSpan / 2) * Math.PI / 180) * radius;
    const outy1 = 128 + Math.sin((i - degreeSpan / 2) * Math.PI / 180) * radius;
    const outx2 = 128 + Math.cos((i + degreeSpan / 2) * Math.PI / 180) * radius;
    const outy2 = 128 + Math.sin((i + degreeSpan / 2) * Math.PI / 180) * radius;

    const inradius = radius - width;
    const inx1 = 128 + Math.cos((i - degreeSpan / 2) * Math.PI / 180) * inradius;
    const iny1 = 128 + Math.sin((i - degreeSpan / 2) * Math.PI / 180) * inradius;
    const inx2 = 128 + Math.cos((i + degreeSpan / 2) * Math.PI / 180) * inradius;
    const iny2 = 128 + Math.sin((i + degreeSpan / 2) * Math.PI / 180) * inradius;

    ctx.beginPath();

    ctx.moveTo(outx1, outy1);
    ctx.lineTo(outx2, outy2);
    ctx.lineTo(inx2, iny2);
    ctx.lineTo(inx1, iny1);
    ctx.lineTo(outx1, outy1);

    ctx.stroke();
    ctx.fill();
    ctx.closePath();
}

const toothCount = 8;
for (let i = 0; i < toothCount; i++) {
    const topToothSpan = 16; // degrees
    const bottomToothSpan = 24; // degrees

    const radius = 128 - 32;
    const height = 24;

    const angle = i * 360 / toothCount;
    const angleRad = angle * Math.PI / 180;
    const bottomToothSpanRad = bottomToothSpan * Math.PI / 180;
    const topToothSpanRad = topToothSpan * Math.PI / 180;

    //   1 ---- 2
    //  /        \
    // 4 -------- 3

    const x1 = 128 + Math.cos(angleRad - topToothSpanRad / 2) * (radius + height);
    const y1 = 128 + Math.sin(angleRad - topToothSpanRad / 2) * (radius + height);
    const x2 = 128 + Math.cos(angleRad + topToothSpanRad / 2) * (radius + height);
    const y2 = 128 + Math.sin(angleRad + topToothSpanRad / 2) * (radius + height);

    const x3 = 128 + Math.cos(angleRad + bottomToothSpanRad / 2) * radius;
    const y3 = 128 + Math.sin(angleRad + bottomToothSpanRad / 2) * radius;
    const x4 = 128 + Math.cos(angleRad - bottomToothSpanRad / 2) * radius;
    const y4 = 128 + Math.sin(angleRad - bottomToothSpanRad / 2) * radius;

    ctx.beginPath();

    // ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.lineTo(x4, y4);
    ctx.lineTo(x1, y1);

    ctx.stroke();
    ctx.fill();
    ctx.closePath();
}

// const download = document.createElement("a");
// download.href = fav.toDataURL();
// download.download = "favicon.png";
// download.click();


