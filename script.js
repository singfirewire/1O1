function calculate() {
    const rateElement = document.getElementById('rate');
    const rateTypeElement = document.getElementById('rateType');
    const quantityElement = document.getElementById('quantity');
    const resultElement = document.getElementById('result');

    const rate = parseFloat(rateElement.value);
    const rateType = rateTypeElement.value;
    const quantity = parseFloat(quantityElement.value);

    let total = rate * quantity;

    if (rateType === 'hourly') {
        rateElement.value = 100; // รีเซ็ตค่าเริ่มต้นหากเลือกต่อชั่วโมง
    } else {
        rateElement.value = 700; // รีเซ็ตค่าเริ่มต้นหากเลือกต่อวัน
    }

    if (total > 1000) {
        total *= 0.93;
    }

    resultElement.textContent = total.toFixed(2);
}


CSS สำหรับจัดรูปแบบ (style.css)
/* เพิ่ม CSS เพื่อจัดรูปแบบตามต้องการ เช่น ขนาดฟอนต์ สี พื้นหลัง */
body {
    font-family: Arial, sans-serif;
    text-align: center;
}
