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
  }
  
  function drawStage(width, height) {
    const canvas = document.getElementById("stageLayout");
    const ctx = canvas.getContext("2d");
  
    // ปรับขนาด Canvas ให้เหมาะสมกับขนาดเวที
    const maxCanvasWidth = 800; // ความกว้างสูงสุดของ Canvas
    const maxCanvasHeight = 600; // ความสูงสูงสุดของ Canvas
    const scale = Math.min(maxCanvasWidth / (width * 50), maxCanvasHeight / (height * 50));
    canvas.width = width * 50 * scale;
    canvas.height = height * 50 * scale;
  
    // ล้าง Canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    // วาดพื้นเวที
    ctx.fillStyle = "#ccc"; // สีพื้นเวที
    ctx.fillRect(50 * scale, 50 * scale, width * 50 * scale, height * 50 * scale); // วาดสี่เหลี่ยม (เวที)
    ctx.strokeStyle = "#000"; // สีเส้นขอบ
    ctx.strokeRect(50 * scale, 50 * scale, width * 50 * scale, height * 50 * scale); // วาดเส้นขอบ
  
    // วาดรอยต่อของเวที (เส้นแบ่งระหว่างแผ่น)
    ctx.strokeStyle = "#888"; // สีเส้นแบ่ง
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
  
    // วาดวงกลมแสดงตำแหน่งขา
    ctx.fillStyle = "#555"; // สีวงกลม
    for (let i = 0; i <= width; i++) {
      for (let j = 0; j <= height; j++) {
        ctx.beginPath();
        ctx.arc(50 * scale + i * 50 * scale, 50 * scale + j * 50 * scale, 5 * scale, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  
    // วาดคาน
    ctx.strokeStyle = "#333"; // สีคาน
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
  
  // เพิ่ม Event Listener สำหรับการคำนวณทันทีเมื่อมีการเปลี่ยนแปลงข้อมูล
  document.getElementById("length").addEventListener("change", calculate);
  document.getElementById("width").addEventListener("change", calculate);
  document.getElementById("price").addEventListener("input", calculate);
  document.getElementById("days").addEventListener("input", calculate);
  document.getElementById("discount").addEventListener("change", calculate);
  
  // คำนวณครั้งแรกเมื่อโหลดหน้าเว็บ
  calculate();
