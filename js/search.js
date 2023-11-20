function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 25.0475613, lng: 121.5173399 },
    zoom: 16,
    mapTypeControl: false,
  });
  const searchBlock = document.getElementById("searchBlock");
  const input = document.getElementById("pac-input");
  // const biasInputElement = document.getElementById("use-location-bias");
  // const strictBoundsInputElement = document.getElementById("use-strict-bounds");
  const options = {
    componentRestrictions: { country: "tw" },
    fields: ["formatted_address", "geometry", "name"],
    strictBounds: false,
    types: ["establishment"],
  };

  map.controls[google.maps.ControlPosition.TOP_LEFT].push(searchBlock);

  const autocomplete = new google.maps.places.Autocomplete(input, options);

  // Bind the map's bounds (viewport) property to the autocomplete object,
  // so that the autocomplete requests use the current map bounds for the
  // bounds option in the request.
  autocomplete.bindTo("bounds", map);

  const infowindow = new google.maps.InfoWindow();
  const infowindowContent = document.getElementById("infowindow-content");

  infowindow.setContent(infowindowContent);

  const marker = new google.maps.Marker({
    map,
    anchorPoint: new google.maps.Point(0, -29),
  });

  autocomplete.addListener("place_changed", () => {
    infowindow.close();
    marker.setVisible(false);

    const place = autocomplete.getPlace();

    if (!place.geometry || !place.geometry.location) {
      // User entered the name of a Place that was not suggested and
      // pressed the Enter key, or the Place Details request failed.
      window.alert("No details available for input: '" + place.name + "'");
      return;
    }

    // If the place has a geometry, then present it on a map.
    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport);
    } else {
      map.setCenter(place.geometry.location);
      map.setZoom(17);
    }

    marker.setPosition(place.geometry.location);
    marker.setVisible(true);
    infowindowContent.children["place-name"].textContent = place.name;
    infowindowContent.children["place-address"].textContent =
      place.formatted_address;
    infowindow.open(map, marker);
  });
}

window.initMap = initMap;

const messageButton = document.querySelector(".i-message_button");

messageButton.addEventListener("click", async function showAlert() {
  const { value: text } = await Swal.fire({
    input: "textarea",
    title: "請留下您的寶貴評論",
    inputPlaceholder: "在此輸入~",
    inputAttributes: {
      "aria-label": "Type your message here",
    },
    showCancelButton: true,
    inputValidator: (value) => {
      if (!value) {
        return "您尚未輸入內容哦~";
      }
    },
  });
  if (text) {
    Swal.fire({
      icon: "success",
      title: "留言已儲存",
      text: "感謝您的評論!",
    });
  }
});

const infoBox = document.querySelectorAll(".container-infoBox");
const infoDetail = document.querySelector(".infoDetail");

infoBox.forEach((element) => {
  element.addEventListener("click", function () {
    infoDetail.classList.toggle("block-active");
  });
});

const pageCount = document.querySelectorAll(".c-page_count");

pageCount.forEach((element) => {
  element.addEventListener("click", function () {
    pageCount.forEach((element) => {
      element.classList.remove("active");
    });
    element.classList.toggle("active");
  });
});
