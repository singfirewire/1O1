// ฟังก์ชันบันทึกค่าลงใน Local Storage
function saveData() {
  const data = {
    length: document.getElementById("length").value,
    width: document.getElementById("width").value,
    price: document.getElementById("price").value,
    days: document.getElementById("days").value,
    discount: document.getElementById("discount").checked,
  };
  localStorage.setItem("stageMasterData", JSON.stringify(data));
}

// ฟังก์ชันโหลดค่าจาก Local Storage
function loadData() {
  const data = JSON.parse(localStorage.getItem("stageMasterData"));
  if (data) {
    document.getElementById("length").value = data.length;
    document.getElementById("width").value = data.width;
    document.getElementById("price").value = data.price;
    document.getElementById("days").value = data.days;
    document.getElementById("discount").checked = data.discount;
  }
}

function calculate() {
  const length = parseFloat(document.getElementById("length").value);
  const width = parseFloat(document.getElementById("width").value);
  const pricePerSetPerDay = parseFloat(document.getElementById("price").value);
  const days = parseInt(document.getElementById("days").value);
  const useDiscount = document.getElementById("discount").checked;

  const numPanelsLength = length / 1.22;
  const numPanelsWidth = width / 1.22;
  const totalPanels = numPanelsLength * numPanelsWidth;
  const legs = (numPanelsLength + 1) * (numPanelsWidth + 1);
  const beams = (numPanelsLength * (numPanelsWidth + 1)) + (numPanelsWidth * (numPanelsLength + 1));

  let totalCost = useDiscount && days >= 2
    ? pricePerSetPerDay * totalPanels + (pricePerSetPerDay / 2) * totalPanels * (days - 1)
    : pricePerSetPerDay * totalPanels * days;

  document.getElementById("result").innerHTML = `
    <strong>จำนวนขา:</strong> ${legs} ชิ้น<br>
    <strong>จำนวนคาน:</strong> ${beams} ชิ้น<br>
    <strong>จำนวนพื้นเวที:</strong> ${totalPanels} ชิ้น<br>
    <strong>ค่าบริการ:</strong> ${totalCost.toLocaleString()} บาท
  `;

  drawStage(numPanelsLength, numPanelsWidth);
  saveData(); // บันทึกค่าล่าสุด
}

function drawStage(width, height) {
  const canvas = document.getElementById("stageLayout");
  const ctx = canvas.getContext("2d");
  const scale = Math.min(800 / (width * 50), 600 / (height * 50));
  canvas.width = width * 50 * scale;
  canvas.height = height * 50 * scale;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#ccc";
  ctx.fillRect(50 * scale, 50 * scale, width * 50 * scale, height * 50 * scale);
  ctx.strokeStyle = "#000";
  ctx.strokeRect(50 * scale, 50 * scale, width * 50 * scale, height * 50 * scale);

  ctx.strokeStyle = "#888";
  ctx.lineWidth = 2;
  for (let i = 1; i < width; i++) {
    ctx.beginPath();
    ctx.moveTo(50 * scale + i * 50 * scale, 50 * scale);
    ctx.lineTo(50 * scale + i * 50 * scale, 50 * scale + height * 50 * scale);
    ctx.stroke();
  }
  for (let j = 1; j < height; j++) {
    ctx.beginPath();
    ctx.moveTo(50 * scale, 50 * scale + j * 50 * scale);
    ctx.lineTo(50 * scale + width * 50 * scale, 50 * scale + j * 50 * scale);
    ctx.stroke();
  }

  ctx.fillStyle = "#555";
  for (let i = 0; i <= width; i++) {
    for (let j = 0; j <= height; j++) {
      ctx.beginPath();
      ctx.arc(50 * scale + i * 50 * scale, 50 * scale + j * 50 * scale, 5 * scale, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  ctx.strokeStyle = "#333";
  ctx.lineWidth = 3;
  for (let i = 0; i <= width; i++) {
    ctx.beginPath();
    ctx.moveTo(50 * scale + i * 50 * scale, 50 * scale);
    ctx.lineTo(50 * scale + i * 50 * scale, 50 * scale + height * 50 * scale);
    ctx.stroke();
  }
  for (let j = 0; j <= height; j++) {
    ctx.beginPath();
    ctx.moveTo(50 * scale, 50 * scale + j * 50 * scale);
    ctx.lineTo(50 * scale + width * 50 * scale, 50 * scale + j * 50 * scale);
    ctx.stroke();
  }
}

// โหลดค่าจาก Local Storage เมื่อหน้าเว็บถูกโหลด
loadData();

// คำนวณครั้งแรกเมื่อโหลดหน้าเว็บ
calculate();

// เพิ่ม Event Listener สำหรับการคำนวณทันทีเมื่อมีการเปลี่ยนแปลงข้อมูล
document.getElementById("length").addEventListener("change", calculate);
document.getElementById("width").addEventListener("change", calculate);
document.getElementById("price").addEventListener("input", calculate);
document.getElementById("days").addEventListener("input", calculate);
document.getElementById("discount").addEventListener("change", calculate);
