"use strict";

const displayMeta = arr => {
  const root = $("#speed-redirect-injection-root"); // Get the <div> with ID speed-redirect-injection-root
  arr.forEach(o => {
    // For Each Attribute Passed from the URL
    let n = Object.keys(o).toString(); // Get the Name of the Attribute
    let t = Object.values(o).toString(); // Get the Value of the Attribute
    let node = `<p style="text-transform:capitalize">${n.replace(
      "_",
      " "
    )}: ${t}</p>`; // Make an Element to Display the Attribute and its Value

    root.append(node); // Add the Element to the DOM for Rendering
  });
};

const bblLookup = bbl => {
  bbl === "" || !bbl || bbl == 0 // If a BBL Doesnt Exist, or is 0
    ? displayMeta([
        { project_number: "hello" },
        { address: "world" },
        { borough: "this" }
      ]) // Display the Information for the BBL
    : // Else
      (window.location.href = `https://speed.cityofnewyork.us/projects/bbl/${bbl}.html`); // Redirect to Property Profile Page
};

// Get BBL
const {
  location: { href }
} = window;
const url = new URL(href);

const { searchParams } = url;
const bbl = searchParams.get("bbl");

bblLookup(!isNaN(parseInt(bbl)) ? parseInt(bbl) : undefined);
