const areas = [
  { id:'university', name:'Westvale University', x:53.5, y:22.5, w:320, h:175, clip:'polygon(8% 34%, 30% 7%, 76% 8%, 98% 39%, 82% 90%, 39% 100%, 7% 72%)', overview:'The university district sits among landscaped grounds, academic buildings, athletics, residence halls, and a central campus lake.', detail:'Westvale University is the largest academic and student-life district on the map. This area will eventually open into the campus map, with individual buildings, athletics, residence halls, services, and Greek-life exploration.', meta:'Education · Campus · Student Life' },
  { id:'downtown', name:'Downtown & Market Square', x:52.5, y:52.0, w:390, h:210, clip:'polygon(9% 19%, 36% 3%, 79% 12%, 98% 44%, 86% 83%, 53% 100%, 18% 86%, 1% 51%)', overview:'The heart of Crimmshaw Heights: a dense downtown grid of shops, restaurants, nightlife, civic destinations, and gathering places.', detail:'This central district is the town’s main commercial and social core. The future detail map can break it into Market Square, dining, nightlife, arts, entertainment, and nearby civic locations.', meta:'Downtown · Shopping · Dining · Nightlife' },
  { id:'mall', name:'Commons Mall & Shopping', x:28.0, y:39.0, w:330, h:190, clip:'polygon(5% 24%, 28% 4%, 77% 8%, 100% 37%, 91% 81%, 48% 100%, 10% 79%, 0 47%)', overview:'A broad commercial district on the western side of town, anchored by major shopping, parking, and retail corridors.', detail:'The western shopping area contains the large retail footprint shown on the map, with room to drill into the Commons Mall, surrounding shopping, and nearby essentials on a dedicated image.', meta:'Shopping · Retail · Essentials' },
  { id:'schools', name:'Schools & Athletics', x:82.0, y:50.5, w:260, h:210, clip:'polygon(16% 7%, 61% 0, 94% 21%, 100% 68%, 71% 96%, 29% 100%, 3% 66%, 0 26%)', overview:'Crimmshaw’s school cluster occupies the eastern side of town, with school buildings and large athletic fields.', detail:'The eastern education district contains the town’s elementary, middle, and high school locations shown in the source map. A future detail image can give each school its own clickable area.', meta:'Education · Schools · Athletics' },
  { id:'raven', name:'Raven’s Pines & Warden’s Hollow', x:13.4, y:24.0, w:295, h:155, clip:'polygon(4% 43%, 16% 13%, 47% 2%, 79% 9%, 99% 40%, 88% 84%, 53% 100%, 18% 90%)', overview:'The wooded western highlands, campsite country, trails, waterfalls, ponds, and Raven’s Pines frame the upper edge of Crimmshaw Heights.', detail:'This northern landscape is the town’s outdoor side: Raven’s Pines, Warden’s Hollow campsite, Echo Ridge, wooded trails, and nearby natural features. The placeholder detail view is ready for a dedicated wilderness map.', meta:'Woods · Campsite · Hiking · Waterfalls · Mountains' },
  { id:'residential', name:'North & East Residential Areas', x:74.0, y:37.0, w:400, h:220, clip:'polygon(6% 23%, 37% 3%, 76% 10%, 98% 37%, 93% 76%, 59% 99%, 20% 90%, 0 54%)', overview:'Quiet residential neighborhoods spread through the wooded hills and eastern edge of town.', detail:'This area represents the residential neighborhoods surrounding the university and eastern school district. The next layer can separate individual neighborhoods and apartment communities once their map images are added.', meta:'Residential · Neighborhoods' },
  { id:'arts', name:'Arts & Culture District', x:40.0, y:51.0, w:250, h:200, clip:'polygon(12% 14%, 56% 0, 93% 22%, 100% 67%, 67% 100%, 24% 91%, 0 54%)', overview:'Creative spaces, galleries, studios, coffeehouses, and entertainment venues cluster around the central-west side of downtown.', detail:'The arts-and-culture layer can become a dense destination map of galleries, studios, cafés, performance spaces, and nearby nightlife, using the existing town lore as the content source.', meta:'Arts · Culture · Studios · Entertainment' },
  { id:'industrial', name:'Industrial Corridor', x:39.0, y:70.0, w:420, h:190, clip:'polygon(4% 26%, 33% 6%, 73% 12%, 98% 45%, 83% 91%, 42% 100%, 7% 78%, 0 48%)', overview:'Warehouses, freight infrastructure, logistics facilities, and working industrial land occupy the southwestern corridor.', detail:'The industrial district follows the lower-left transportation corridor and river. Its future detail image can show the logistics hub, old mill warehouses, freight depot, and surrounding roads.', meta:'Industrial · Warehouses · Freight' },
  { id:'riverbend', name:'Riverbend & Mill Lofts', x:65.0, y:72.0, w:390, h:220, clip:'polygon(10% 17%, 45% 2%, 84% 14%, 100% 49%, 82% 91%, 48% 100%, 13% 84%, 0 48%)', overview:'Dense residential development and older mill-era buildings gather along the river in the southern part of town.', detail:'This river district blends apartment communities, former industrial structures, roads, bridges, and the river itself. A dedicated detail map can divide it into the residential and historic mill areas.', meta:'Residential · River · Mill District' },
  { id:'civic', name:'Civic & Services', x:65.0, y:54.0, w:250, h:180, clip:'polygon(12% 19%, 50% 2%, 91% 18%, 100% 60%, 73% 96%, 30% 100%, 0 62%)', overview:'Town services and practical destinations sit around the downtown core and its eastern edge.', detail:'The civic layer is reserved for the town hall, library, medical center, post office, auto services, florist, and other everyday destinations represented in the Crimmshaw Heights source material.', meta:'Civic · Services · Community' }
];

const hotspots = document.getElementById('hotspots');
const overview = document.getElementById('overview');
const overviewTitle = document.getElementById('overviewTitle');
const overviewText = document.getElementById('overviewText');
const detail = document.getElementById('detailMap');
const detailTitle = document.getElementById('detailTitle');
const detailBody = document.getElementById('detailBody');
const detailMeta = document.getElementById('detailMeta');
const backButton = document.getElementById('backButton');
const mainMap = document.getElementById('mainMap');

let activeId = null;

function showOverview(area) {
  overviewTitle.textContent = area.name;
  overviewText.textContent = area.overview;
  overview.classList.add('is-hovering');
}
function resetOverview() {
  overviewTitle.textContent = 'Hover over an area';
  overviewText.textContent = 'Move across the map to discover the major districts of town.';
  overview.classList.remove('is-hovering');
}
function enterArea(area) {
  activeId = area.id;
  document.querySelectorAll('.hotspot').forEach(el => el.classList.remove('active'));
  const active = document.querySelector(`[data-id="${area.id}"]`);
  if (active) active.classList.add('active');
  detailTitle.textContent = area.name;
  detailBody.innerHTML = `<p>${area.detail}</p><p>This screen is intentionally ready for the next image layer. Replace the placeholder background with the detailed area map when it is available.</p>`;
  detailMeta.textContent = area.meta;
  mainMap.style.transformOrigin = `${area.x}% ${area.y}%`;
  mainMap.classList.add('zooming');
  detail.setAttribute('aria-hidden','false');
  window.setTimeout(() => detail.classList.add('open'), 80);
  window.setTimeout(() => mainMap.classList.remove('zooming'), 700);
}
function leaveArea() {
  detail.classList.remove('open');
  detail.setAttribute('aria-hidden','true');
  window.setTimeout(() => {
    document.querySelectorAll('.hotspot').forEach(el => el.classList.remove('active'));
    activeId = null;
    resetOverview();
  }, 620);
}

areas.forEach(area => {
  const button = document.createElement('button');
  button.className = 'hotspot';
  button.type = 'button';
  button.dataset.id = area.id;
  button.style.left = `${area.x}%`;
  button.style.top = `${area.y}%`;
  button.style.setProperty('--w', `${area.w}px`);
  button.style.setProperty('--h', `${area.h}px`);
  button.style.setProperty('--clip', area.clip);
  button.setAttribute('aria-label', `Explore ${area.name}`);
  button.innerHTML = `<span class="hotspot-label">${area.name}</span>`;
  button.addEventListener('mouseenter', () => showOverview(area));
  button.addEventListener('focus', () => showOverview(area));
  button.addEventListener('mouseleave', () => { if (!activeId) resetOverview(); });
  button.addEventListener('blur', () => { if (!activeId) resetOverview(); });
  button.addEventListener('click', () => enterArea(area));
  hotspots.appendChild(button);
});

backButton.addEventListener('click', leaveArea);
document.addEventListener('keydown', e => { if (e.key === 'Escape' && detail.classList.contains('open')) leaveArea(); });
