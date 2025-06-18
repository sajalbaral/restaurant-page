function createContact(string) {
  const p = document.createElement("p");
  p.innerText = string;

  return p;
}

export function loadContact() {
  const contactContainer = document.createElement("div");
  contactContainer.className = "contact-container";

  contactContainer.appendChild(createContact("Call Us: 123-434-5555"));
  contactContainer.appendChild(
    createContact("Email Us: getchawings@notreal.com")
  );
  contactContainer.appendChild(
    createContact("Location: Hollywood Boulevard 42, Los Angeles, USA")
  );

  return contactContainer;
}
