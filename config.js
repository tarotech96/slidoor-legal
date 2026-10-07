// The one place to edit: the contact email shown on every page.
window.SLIDOOR_LEGAL = {
  contactEmail: "CONTACT_EMAIL",
  seller: "TaroTech",
  updated: "2026-10-07"
};

document.addEventListener("DOMContentLoaded", function () {
  var c = window.SLIDOOR_LEGAL;
  document.querySelectorAll("[data-contact]").forEach(function (el) {
    var a = document.createElement("a");
    a.href = "mailto:" + c.contactEmail;
    a.textContent = c.contactEmail;
    el.replaceChildren(a);
  });
  document.querySelectorAll("[data-seller]").forEach(function (el) { el.textContent = c.seller; });
  document.querySelectorAll("[data-updated]").forEach(function (el) { el.textContent = c.updated; });
});
