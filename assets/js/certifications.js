/* CERTIFICATIONS COMPONENT
   Load once with defer. It renders into <div id="certifications-mount"></div>.
   Your existing html.dark class controls its theme.
   Titles and source labels below come from the two supplied filename screenshots.
   No dates, scores, credential IDs, verification status, or award outcomes were supplied.
   Add PDFs by replacing each document's href:null with its relative file path.
   Do not turn numbered filename variants into claimed course levels without checking the PDFs.
*/
(() => {
  "use strict";
  const mount = document.getElementById("certifications-mount");
  if (!mount || mount.dataset.certificationsMounted === "true") return;

  // EDIT YOUR COLLECTION HERE. Multiple documents may belong to one showcase entry.
  // issueDate: ISO date or null; credentialId: exact ID or null;
  // verificationUrl: an actual credential-verification URL or null.
  const credentials = [
    { id:"nptel-algorithm", title:"Introduction to Algorithm", source:"NPTEL", mark:"N", category:"Development", kind:"Course", icon:"code", description:"Algorithmic problem solving and the foundations of computational thinking.", skills:["Algorithms","Problem solving"], issueDate:null, credentialId:null, verificationUrl:null, documents:[{name:"NPTEL-Introduction To Algorithm.pdf",href:null}] },
    { id:"nptel-ml", title:"Machine Learning", source:"NPTEL", mark:"N", category:"Data & AI", kind:"Course", icon:"data", description:"Exploring machine learning, patterns in data, and the ideas behind predictive models.", skills:["Machine learning","Data"], issueDate:null, credentialId:null, verificationUrl:null, documents:[{name:"NPTEL-Machine Learning.pdf",href:null}] },
    { id:"cisco-enterprise", title:"Enterprise Networking", source:"Cisco", mark:"C", category:"Networking", kind:"Course", icon:"network", description:"Enterprise networking concepts and the infrastructure that connects applications and people.", skills:["Networking","Infrastructure"], issueDate:null, credentialId:null, verificationUrl:null, documents:[{name:"CISCO-Enterprise Networking.pdf",href:null},{name:"CISCO-Enterprise Networking2.pdf",href:null},{name:"CISCO-Enterprise Networking3.pdf",href:null}] },
    { id:"iitk-java", title:"Core Java", source:"IIT Kanpur", mark:"IITK", category:"Development", kind:"Course", icon:"code", description:"Java programming and the object-oriented foundations behind structured application development.", skills:["Java","Programming"], issueDate:null, credentialId:null, verificationUrl:null, documents:[{name:"IIT Kanpur-Core Java.pdf",href:null}] },
    { id:"iitb-php", title:"PHP & MySQL", source:"IIT Bombay", mark:"IITB", category:"Development", kind:"Course", icon:"database", description:"Web development with PHP and relational data storage using MySQL.", skills:["PHP","MySQL","Web development"], issueDate:null, credentialId:null, verificationUrl:null, documents:[{name:"IIT Bombay-PHP & MySQL.pdf",href:null}] },
    { id:"internshala-ml", title:"Machine Learning", source:"Internshala", mark:"IN", category:"Data & AI", kind:"Training", icon:"data", description:"Machine learning training within a broader journey of learning software and data technologies.", skills:["Machine learning","Data"], issueDate:null, credentialId:null, verificationUrl:null, documents:[{name:"Internshala-Machine Learning.pdf",href:null}] },
    { id:"cisco-python", title:"Python", source:"Cisco", mark:"C", category:"Development", kind:"Course", icon:"code", description:"Python programming as a practical foundation for software development and working with data.", skills:["Python","Programming"], issueDate:null, credentialId:null, verificationUrl:null, documents:[{name:"CISCO-Python.pdf",href:null}] },
    { id:"cisco-intro", title:"Introduction to Network", source:"Cisco", mark:"C", category:"Networking", kind:"Course", icon:"network", description:"An introduction to computer networking and how connected systems communicate.", skills:["Networking","Computer networks"], issueDate:null, credentialId:null, verificationUrl:null, documents:[{name:"CISCO-Introduction To Network.pdf",href:null},{name:"CISCO-Introduction To Network2.pdf",href:null},{name:"CISCO-Introduction To Network3.pdf",href:null}] },
    { id:"cisco-c", title:"Advance C", source:"Cisco", mark:"C", category:"Development", kind:"Course", icon:"code", description:"C programming within a collection of technical learning and programming records.", skills:["C","Programming"], issueDate:null, credentialId:null, verificationUrl:null, documents:[{name:"CISCO-Advance C.pdf",href:null},{name:"CISCO-Advance C-2.pdf",href:null}] },
    { id:"sololearn-python", title:"Python Core", source:"SoloLearn", mark:"SL", category:"Development", kind:"Course", icon:"code", description:"Core Python concepts and the fundamentals of writing and understanding programs.", skills:["Python","Programming fundamentals"], issueDate:null, credentialId:null, verificationUrl:null, documents:[{name:"SoloLearn-Python Core.pdf",href:null}] },
    { id:"sololearn-c", title:"C Programming", source:"SoloLearn", mark:"SL", category:"Development", kind:"Course", icon:"code", description:"The foundations of C programming and computational problem solving.", skills:["C","Programming fundamentals"], issueDate:null, credentialId:null, verificationUrl:null, documents:[{name:"SoloLearn-C.pdf",href:null}] },
    { id:"iitk-ml", title:"Machine Learning", source:"IIT Kanpur", mark:"IITK", category:"Data & AI", kind:"Course", icon:"data", description:"Machine learning concepts and the use of data to explore patterns and predictions.", skills:["Machine learning","Data"], issueDate:null, credentialId:null, verificationUrl:null, documents:[{name:"IIT Kanpur-Machine Learning.pdf",href:null}] },
    { id:"iitb-drupal", title:"Drupal", source:"IIT Bombay", mark:"IITB", category:"Development", kind:"Course", icon:"code", description:"Web content management and building websites with Drupal.", skills:["Drupal","Content management"], issueDate:null, credentialId:null, verificationUrl:null, documents:[{name:"IIT Bombay-Drupal.pdf",href:null}] },
    { id:"techgig-cpp", title:"C++", source:"TechGig", mark:"TG", category:"Development", kind:"Skill record", icon:"code", description:"A C++ programming record within my collection of technical learning and practice.", skills:["C++","Programming"], issueDate:null, credentialId:null, verificationUrl:null, documents:[{name:"TECHGIG-C++.pdf",href:null}] },
    { id:"oasis-web", title:"Web Development", source:"OASIS", mark:"O", category:"Internships", kind:"Internship record", icon:"briefcase", description:"A web development record from the OASIS collection.", skills:["Web development"], issueDate:null, credentialId:null, verificationUrl:null, documents:[{name:"OASIS-WebDev",href:null}] },
    { id:"tsf-rotational", title:"Rotational Internship", source:"TSF", mark:"TSF", category:"Internships", kind:"Internship record", icon:"briefcase", description:"A rotational internship record within my professional-learning collection.", skills:["Internship","Professional learning"], issueDate:null, credentialId:null, verificationUrl:null, documents:[{name:"Rotational Internship-TSF.pdf",href:null}] },
    { id:"innovationx", title:"InnovationX", source:"D2C", mark:"D2C", category:"Events", kind:"Event record", icon:"spark", description:"InnovationX, part of my collection of challenges and learning events.", skills:["Innovation","Challenges"], issueDate:null, credentialId:null, verificationUrl:null, documents:[{name:"D2C-InnovationX.pdf",href:null}] },
    { id:"safeathon", title:"Safe-A-Thon", source:"D2C", mark:"D2C", category:"Events", kind:"Event record", icon:"spark", description:"Safe-A-Thon, part of my collection of challenges and learning events.", skills:["Challenges","Learning events"], issueDate:null, credentialId:null, verificationUrl:null, documents:[{name:"D2C-Safe-A-Thon.pdf",href:null}] },
    { id:"juspay", title:"Think Big · Juspay", source:"D2C / Juspay", mark:"D2C", category:"Events", kind:"Event record", icon:"spark", description:"The Think Big Juspay record from my event and challenge collection.", skills:["Challenges","Problem solving"], issueDate:null, credentialId:null, verificationUrl:null, documents:[{name:"D2C-Think Big Juspay.pdf",href:null}] },
    { id:"reliance", title:"Reliance Quiz-A-Thon", source:"D2C / Reliance", mark:"D2C", category:"Events", kind:"Quiz record", icon:"spark", description:"The Reliance Quiz-A-Thon record from my learning-event collection.", skills:["Quiz","Learning events"], issueDate:null, credentialId:null, verificationUrl:null, documents:[{name:"D2C-Reliance Quiz-A-Thon.pdf",href:null}] },
    { id:"ojass", title:"OJASS-19", source:"OJASS", mark:"OJ", category:"Events", kind:"Event record", icon:"spark", description:"OJASS-19, part of my event and participation record collection.", skills:["Events"], issueDate:null, credentialId:null, verificationUrl:null, documents:[{name:"OJASS-19.pdf",href:null}] },
    { id:"cvc", title:"Central Vigilance Commission", source:"Central Vigilance Commission", mark:"CVC", category:"Events", kind:"Participation record", icon:"award", description:"A Central Vigilance Commission document within my participation record collection.", skills:["Participation"], issueDate:null, credentialId:null, verificationUrl:null, documents:[{name:"Central Vigilance Commission.pdf",href:null}] }
  ];

  const PAGE_SIZE = 6;
  const categories = ["All", "Development", "Data & AI", "Networking", "Internships", "Events"];
  const paths = {
    search:'<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',
    code:'<path d="m7 6-5 6 5 6m10-12 5 6-5 6M14 3l-4 18"/>',
    data:'<path d="M4 19V9m8 10V4m8 15v-7M2 21h20"/><circle cx="4" cy="6" r="1"/><circle cx="12" cy="2" r="1"/><circle cx="20" cy="9" r="1"/>',
    database:'<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v7c0 4 16 4 16 0V5M4 12v7c0 4 16 4 16 0v-7"/>',
    network:'<rect x="9" y="2" width="6" height="5" rx="1"/><rect x="2" y="17" width="6" height="5" rx="1"/><rect x="16" y="17" width="6" height="5" rx="1"/><path d="M12 7v5M5 17v-5h14v5"/>',
    briefcase:'<rect x="3" y="7" width="18" height="14" rx="2"/><path d="M8 7V4h8v3M3 12c6 3 12 3 18 0M10 12v3h4v-3"/>',
    spark:'<path d="m12 2 2.7 7.3L22 12l-7.3 2.7L12 22l-2.7-7.3L2 12l7.3-2.7L12 2Z"/>',
    award:'<circle cx="12" cy="8" r="5"/><path d="m8 12-2 9 6-3 6 3-2-9"/>',
    file:'<path d="M14 2H5v20h14V7l-5-5Zm0 0v6h5M8 12h8M8 16h6"/>',
    arrow:'<path d="M6 18 18 6M6 6h12v12"/>',
    down:'<path d="m6 9 6 6 6-6"/>',
    close:'<path d="m6 6 12 12M18 6 6 18"/>',
    sort:'<path d="M3 6h18M6 12h12M9 18h6"/>',
    info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7v.1"/>'
  };
  const icon = name => `<svg class="cs-icon" viewBox="0 0 24 24" aria-hidden="true">${paths[name] || paths.file}</svg>`;
  const escape = value => String(value ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const normalize = value => String(value).normalize("NFKD").toLocaleLowerCase();
  function urlFor(value, allowFile = true) {
    if (!value) return null;
    try { const url = new URL(value, document.baseURI); return ["https:","http:", ...(allowFile ? ["file:"] : [])].includes(url.protocol) ? url.href : null; } catch { return null; }
  }
  function dateLabel(value) {
    if (!value) return null;
    const date = new Date(value + (value.length === 10 ? "T00:00:00" : ""));
    return Number.isNaN(date.getTime()) ? null : new Intl.DateTimeFormat("en-IN",{month:"short",year:"numeric"}).format(date);
  }

  const markup = `
<section class="cert-showcase" aria-labelledby="cs-title">
    <header class="cs-intro">
      <div class="cs-intro-copy">
        <p class="cs-eyebrow">Curiosity, put into practice</p>
        <h2 class="cs-title" id="cs-title">Certifications <span>&amp; continuous learning.</span></h2>
        <p class="cs-description">Exploring the ideas behind better software. A collection of technical courses, internships, and challenges across development, data, and connected systems.</p>
      </div>
      <div class="cs-collection-note"><strong class="cs-total">${credentials.length}</strong><span class="cs-total-caption">collection entries</span><span class="cs-total-detail">Across ${categories.length - 1} focus areas</span></div>
    </header>
    <ul class="cs-discipline-strip" aria-label="Learning disciplines">
      <li>${icon("code")}Software development</li><li>${icon("data")}Data &amp; machine learning</li><li>${icon("network")}Networks &amp; infrastructure</li>
    </ul>
    <div class="cs-browser" id="cs-collection">
      <div class="cs-toolbar">
        <p class="cs-section-label">Explore the collection<small>Always a student.</small></p>
        <div class="cs-search">${icon("search")}<label class="cs-sr" for="cs-search">Search learning records</label><input id="cs-search" type="search" placeholder="Search a topic, source, or skill…" autocomplete="off"><button type="button" class="cs-search-clear" aria-label="Clear search" hidden>${icon("close")}</button></div>
      </div>
      <div class="cs-filter-row">
        <div class="cs-filters" role="group" aria-label="Filter learning records">${categories.map(category => `<button type="button" class="cs-filter" data-category="${escape(category)}" aria-pressed="${category === "All"}">${escape(category)}<span>${category === "All" ? credentials.length : credentials.filter(record => record.category === category).length}</span></button>`).join("")}</div>
        <label class="cs-sort">${icon("sort")}<span class="cs-sr">Sort learning records</span><select id="cs-sort"><option value="featured">Selected first</option><option value="title">Title: A–Z</option><option value="source">Source: A–Z</option></select></label>
      </div>
      <div class="cs-results-line"><p class="cs-results-count" aria-live="polite" aria-atomic="true"></p><button type="button" class="cs-reset" hidden>Reset filters</button></div>
      <div class="cs-grid" role="list" aria-label="Learning records"></div>
      <div class="cs-empty" hidden>${icon("search")}<h3>No matching records</h3><p>Try a topic such as Python, a source such as NPTEL, or another focus area.</p><button type="button" class="cs-reset cs-empty-reset">Show the full collection</button></div>
      <div class="cs-bottom"><button type="button" class="cs-more"><span></span>${icon("down")}</button><p class="cs-bottom-caption"></p></div>
    </div>
    <footer class="cs-footer"><p>Learning is part of <span>the work.</span></p><small>Courses · Internships · Challenges</small></footer>
    <dialog class="cs-dialog" aria-labelledby="cs-dialog-title">
      <div class="cs-dialog-top"><p class="cs-dialog-label">${icon("award")}Learning record</p><button type="button" class="cs-close" aria-label="Close credential details">${icon("close")}</button></div>
      <div class="cs-dialog-content"></div>
    </dialog>
  </section>`;
  const template = document.createElement("template"); template.innerHTML = markup;
  mount.append(template.content.cloneNode(true)); mount.dataset.certificationsMounted = "true";
  const root = mount.querySelector(".cert-showcase");
  const search = root.querySelector("#cs-search");
  const sort = root.querySelector("#cs-sort");
  const clear = root.querySelector(".cs-search-clear");
  const grid = root.querySelector(".cs-grid");
  const more = root.querySelector(".cs-more");
  const dialog = root.querySelector(".cs-dialog");
  const dialogContent = root.querySelector(".cs-dialog-content");
  let category = "All";
  let limit = PAGE_SIZE;
  let previousOverflow = "";
  let dialogOpener = null;

  function matchingRecords() {
    const query = normalize(search.value.trim());
    let records = credentials.filter(record => (category === "All" || record.category === category) && (!query || normalize([record.title,record.source,record.category,record.kind,...record.skills].join(" ")).includes(query)));
    if (sort.value !== "featured") records = [...records].sort((a,b) => (sort.value === "source" ? a.source.localeCompare(b.source) || a.title.localeCompare(b.title) : a.title.localeCompare(b.title)));
    return records;
  }
  function render() {
    const records = matchingRecords();
    const shown = records.slice(0,limit);
    grid.innerHTML = shown.map(record => `<article class="cs-card" role="listitem" aria-labelledby="cs-card-${record.id}">
      <div class="cs-card-top"><span class="cs-provider-mark" aria-hidden="true">${escape(record.mark)}</span><span class="cs-card-kind">${icon(record.icon)}${escape(record.kind)}</span></div>
      <p class="cs-provider">${escape(record.source)}</p><h3 id="cs-card-${record.id}">${escape(record.title)}</h3>
      <p class="cs-card-copy">${escape(record.description)}</p>
      <div class="cs-card-tags">${record.skills.map(skill => `<span class="cs-card-tag">${escape(skill)}</span>`).join("")}</div>
      <div class="cs-card-bottom"><span class="cs-document-count">${icon("file")}${record.documents.length} ${record.documents.length === 1 ? "document" : "documents"}</span><button type="button" class="cs-details-button" data-credential="${escape(record.id)}" aria-label="View details: ${escape(record.title)}, ${escape(record.source)}">View details${icon("arrow")}</button></div>
    </article>`).join("");
    root.querySelector(".cs-results-count").textContent = records.length ? `Showing ${shown.length} of ${records.length} ${category === "All" ? "collection entries" : category.toLowerCase() + " entries"}` : "0 matching records";
    root.querySelector(".cs-reset").hidden = !search.value.trim() && category === "All";
    clear.hidden = !search.value;
    root.querySelector(".cs-empty").hidden = records.length > 0;
    grid.hidden = records.length === 0;
    root.querySelector(".cs-bottom").hidden = records.length === 0;
    more.hidden = shown.length >= records.length;
    more.querySelector("span").textContent = `Show ${Math.min(PAGE_SIZE, records.length - shown.length)} more`;
    root.querySelector(".cs-bottom-caption").textContent = shown.length < records.length ? `${records.length - shown.length} more ${records.length - shown.length === 1 ? "entry" : "entries"} to explore` : "You’re viewing every matching entry.";
    root.querySelectorAll(".cs-filter").forEach(button => button.setAttribute("aria-pressed", String(button.dataset.category === category)));
  }
  function reset() {
    search.value = ""; category = "All"; limit = PAGE_SIZE; sort.value = "featured"; render();
  }
  function showDetails(record, opener) {
    const issued = dateLabel(record.issueDate);
    const verification = urlFor(record.verificationUrl, false);
    const available = record.documents.map(file => ({...file,url:urlFor(file.href)}));
    const first = available.find(file => file.url);
    dialogContent.innerHTML = `
      <div class="cs-detail-header"><span class="cs-provider-mark" aria-hidden="true">${escape(record.mark)}</span><div><p class="cs-provider">${escape(record.source)}</p><h3 id="cs-dialog-title">${escape(record.title)}</h3></div></div>
      <p class="cs-detail-summary">${escape(record.description)}</p>
      <dl class="cs-detail-facts"><div><dt>Focus area</dt><dd>${escape(record.category)}</dd></div><div><dt>Record type</dt><dd>${escape(record.kind)}</dd></div><div><dt>Listed source</dt><dd>${escape(record.source)}</dd></div>${issued ? `<div><dt>Issued</dt><dd>${escape(issued)}</dd></div>` : ""}${record.credentialId ? `<div><dt>Credential ID</dt><dd>${escape(record.credentialId)}</dd></div>` : ""}</dl>
      <div class="cs-detail-topics">${record.skills.map(skill => `<span class="cs-card-tag">${escape(skill)}</span>`).join("")}</div>
      <h4 class="cs-documents-heading">Supporting ${available.length === 1 ? "document" : "documents"}</h4>
      <ul class="cs-files">${available.map(file => `<li class="cs-file">${icon("file")}<span class="cs-file-name">${escape(file.name)}</span>${file.url ? `<a href="${escape(file.url)}" target="_blank" rel="noopener noreferrer">Open PDF${icon("arrow")}</a>` : '<span class="cs-file-status">Preview unavailable</span>'}</li>`).join("")}</ul>
      ${first ? `<iframe class="cs-document-frame" src="${escape(first.url)}" title="${escape(record.title)} document preview"></iframe>` : `<p class="cs-availability">${icon("info")}The source document is not available to view here yet.</p>`}
      ${verification ? `<a class="cs-verify" href="${escape(verification)}" target="_blank" rel="noopener noreferrer">Verify credential${icon("arrow")}</a>` : ""}`;
    dialogOpener = opener;
    previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog.showModal();
  }

  root.querySelectorAll(".cs-filter").forEach(button => button.addEventListener("click", () => { category = button.dataset.category; limit = PAGE_SIZE; render(); }));
  search.addEventListener("input", () => { limit = PAGE_SIZE; render(); });
  clear.addEventListener("click", () => { search.value = ""; limit = PAGE_SIZE; render(); search.focus(); });
  sort.addEventListener("change", () => { limit = PAGE_SIZE; render(); });
  root.querySelectorAll(".cs-reset").forEach(button => button.addEventListener("click", () => { reset(); search.focus(); }));
  more.addEventListener("click", () => { limit += PAGE_SIZE; render(); });
  grid.addEventListener("click", event => {
    const button = event.target.closest("[data-credential]");
    if (!button || !grid.contains(button)) return;
    const record = credentials.find(item => item.id === button.dataset.credential);
    if (record) showDetails(record,button);
  });
  root.querySelector(".cs-close").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", event => {
    const box = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom)) dialog.close();
  });
  dialog.addEventListener("close", () => {
    document.body.style.overflow = previousOverflow;
    dialogContent.innerHTML = "";
    if (dialogOpener?.isConnected) dialogOpener.focus();
  });
  render();
})();
