// ===== HAMBURGER MENU TOGGLE =====
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const sections = document.querySelectorAll(".section");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("show");
});

document.querySelectorAll("#menu li").forEach((item) => {
  item.addEventListener("click", () => {
    let targetId = item.getAttribute("data-target");

    // Hide all sections
    sections.forEach((sec) => {
      sec.style.display = "none";
      sec.classList.remove("active");
    });

    // Show selected section
    const targetSection = document.getElementById(targetId);
    targetSection.style.display = "block";
    setTimeout(() => targetSection.classList.add("active"), 50);

    // Hide menu after selection
    menu.classList.remove("show");
  });
});

// ===== IMAGE ENCRYPTION =====
async function encryptImage() {
  const fileInput = document.getElementById("imageInput").files[0];
  const password = document.getElementById("imageKey").value;
  if (!fileInput || !password) {
    alert("Please select an image and enter a key");
    return;
  }
  const reader = new FileReader();
  reader.onload = async function () {
    const encrypted = await encryptData(reader.result, password);
    downloadFile(encrypted, fileInput.name + ".enc");
  };
  reader.readAsArrayBuffer(fileInput);
}

async function decryptImage() {
  const fileInput = document.getElementById("imageFile").files[0];
  const password = document.getElementById("imageKey").value;
  if (!fileInput || !password) {
    alert("Please select an encrypted file and enter the key");
    return;
  }
  const reader = new FileReader();
  reader.onload = async function () {
    try {
      const decrypted = await decryptData(reader.result, password);
      downloadFile(decrypted, fileInput.name.replace(".enc", ""));
    } catch (err) {
      alert("Decryption failed: Wrong key or corrupted file");
    }
  };
  reader.readAsArrayBuffer(fileInput);
}

// ===== VIDEO ENCRYPTION (Same as Image) =====
async function encryptVideo() {
  const fileInput = document.getElementById("videoInput").files[0];
  const password = document.getElementById("videoEncryptKey").value;
  if (!fileInput || !password) {
    alert("Please select a video and enter a key");
    return;
  }
  const reader = new FileReader();
  reader.onload = async function () {
    const encrypted = await encryptData(reader.result, password);
    downloadFile(encrypted, fileInput.name + ".enc");
  };
  reader.readAsArrayBuffer(fileInput);
}

async function decryptVideo() {
  const fileInput = document.getElementById("videoFile").files[0];
  const password = document.getElementById("videoDecryptKey").value;
  if (!fileInput || !password) {
    alert("Please select an encrypted file and enter the key");
    return;
  }
  const reader = new FileReader();
  reader.onload = async function () {
    try {
      const decrypted = await decryptData(reader.result, password);
      downloadFile(decrypted, fileInput.name.replace(".enc", ""));
    } catch (err) {
      alert("Decryption failed: Wrong key or corrupted file");
    }
  };
  reader.readAsArrayBuffer(fileInput);
}

// ===== TEXT ENCRYPTION =====
async function encryptText() {
  const text = document.getElementById("textInput").value;
  const password = document.getElementById("textKey").value;
  if (!text || !password) {
    alert("Please enter text and a key");
    return;
  }
  const encoder = new TextEncoder();
  const data = encoder.encode(text);
  const encrypted = await encryptData(data.buffer, password);

  // Base64 encode for readable output
  const base64 = btoa(String.fromCharCode(...new Uint8Array(encrypted)));
  document.getElementById("textOutput").value = base64;
}

async function decryptText() {
  const encryptedText = document.getElementById("textInput").value;
  const password = document.getElementById("textKey").value;
  if (!encryptedText || !password) {
    alert("Please enter encrypted text and a key");
    return;
  }

  try {
    // Base64 decode
    const binary = atob(encryptedText);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }

    const decrypted = await decryptData(bytes.buffer, password);
    const decoder = new TextDecoder();
    document.getElementById("textOutput").value = decoder.decode(decrypted);
  } catch (err) {
    alert("Decryption failed: Wrong key or corrupted text");
  }
}

// ===== ENCRYPTION CORE FUNCTIONS =====
async function getKeyMaterial(password) {
  let enc = new TextEncoder();
  return crypto.subtle.importKey(
    "raw",
    enc.encode(password),
    { name: "PBKDF2" },
    false,
    ["deriveBits", "deriveKey"]
  );
}

async function getKey(keyMaterial, salt) {
  return crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt: salt,
      iterations: 100000,
      hash: "SHA-256",
    },
    keyMaterial,
    { name: "AES-GCM", length: 256 },
    true,
    ["encrypt", "decrypt"]
  );
}

async function encryptData(data, password) {
  const keyMaterial = await getKeyMaterial(password);
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const key = await getKey(keyMaterial, salt);
  const encrypted = await crypto.subtle.encrypt(
    { name: "AES-GCM", iv: iv },
    key,
    data
  );

  let buffer = new Uint8Array(
    salt.byteLength + iv.byteLength + encrypted.byteLength
  );
  buffer.set(salt, 0);
  buffer.set(iv, salt.byteLength);
  buffer.set(new Uint8Array(encrypted), salt.byteLength + iv.byteLength);
  return buffer;
}

async function decryptData(data, password) {
  const salt = data.slice(0, 16);
  const iv = data.slice(16, 28);
  const encrypted = data.slice(28);
  const keyMaterial = await getKeyMaterial(password);
  const key = await getKey(keyMaterial, salt);
  return crypto.subtle.decrypt({ name: "AES-GCM", iv: iv }, key, encrypted);
}

// ===== DOWNLOAD FILE =====
function downloadFile(data, filename) {
  const blob = new Blob([data]);
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
}
