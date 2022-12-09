function onSubmit(e) {
  e.preventDefault();

  document.querySelector(".msg").textContent = "";
  document.querySelector("#image").src = "";

  const prompt = document.querySelector("#prompt").value;
  const size = document.querySelector("#size").value;

  if (prompt == "") {
    alert("Please enter your image description");
    return;
  }

  //: function generate AI Image
  generatorImageRequest(prompt, size);
}

async function generatorImageRequest(prompt, size) {
  try {
    showLoader();

    const response = await fetch("/openia/generateimage", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        prompt,
        size,
      }),
    });

    if (!response.ok) {
      hideLoader();
      throw new Error("Image not generated");
    }

    const data = await response.json();

    const iaImage = data.data;

    document.querySelector("#image").src = iaImage;

    hideLoader();
  } catch (error) {
    document.querySelector(".msg").textContent = error;
  }
}

function showLoader() {
  document.querySelector(".loader-effect").classList.add("show");
  document.querySelector(".loader").classList.add("show");
}

function hideLoader() {
  document.querySelector(".loader-effect").classList.remove("show");
  document.querySelector(".loader").classList.remove("show");
}

document.querySelector("#image-form").addEventListener("submit", onSubmit);
