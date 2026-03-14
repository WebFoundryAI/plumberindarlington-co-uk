/**
 * Location-specific data including neighborhoods, landmarks, and drainage challenges
 */
export interface LocationData {
  neighborhoods: string[];
  landmarks: string[];
  drainageInfo: string;
  responseTime: string;
  propertyTypes: string;
}

export const LOCATION_DATA: Record<string, LocationData> = {
  darlington: {
    neighborhoods: ["Cockerton", "Haughton", "Mowden", "Hurworth", "Middleton St George", "Whinfield", "Firth Moor", "Eastbourne"],
    landmarks: ["Darlington Market Hall", "the Brick Train sculpture", "Darlington Railway Museum", "St Cuthbert's Church", "South Park"],
    drainageInfo: "Darlington's drainage infrastructure reflects its rich Victorian railway heritage and centuries of market town growth. The town centre features ageing clay pipe networks beneath its historic streets, while surrounding residential areas from the Victorian era through to modern estates each present different drainage challenges. The River Skerne running through the town and the generally flat terrain of the Tees Lowlands influence groundwater levels across the area.",
    responseTime: "typically within 60 minutes",
    propertyTypes: "Victorian terraces, Edwardian semis, 1930s bay-fronted houses, post-war estates, and modern developments"
  },
  "newton-aycliffe": {
    neighborhoods: ["Aycliffe Village", "School Aycliffe", "Woodham", "Horndale", "Simpasture"],
    landmarks: ["Newton Aycliffe Town Centre", "Aycliffe Business Park", "the Great Aycliffe Way", "Woodham Golf Club", "Aycliffe Village Green"],
    drainageInfo: "Newton Aycliffe was developed as a new town in the 1940s and 50s, meaning most of its drainage infrastructure dates from that era. While newer than Darlington's Victorian systems, these mid-century concrete and clay pipes are now reaching the end of their design life. The town's planned layout means drainage routes are generally well-documented, but original materials are increasingly prone to deterioration and root intrusion from maturing street trees.",
    responseTime: "typically within 45-60 minutes",
    propertyTypes: "new town housing from the 1940s-60s, modern executive homes, commercial units, and industrial premises"
  },
  "bishop-auckland": {
    neighborhoods: ["Woodhouse Close", "Etherley", "Cockton Hill", "West Auckland", "Tindale Crescent"],
    landmarks: ["Auckland Castle", "the Kynren amphitheatre", "Bishop Auckland Town Hall", "the Market Place", "Escomb Saxon Church"],
    drainageInfo: "Bishop Auckland combines a historic market town centre with surrounding villages and modern estates. Auckland Castle and the medieval town centre feature some of the oldest drainage in County Durham, while the surrounding residential areas have a mix of Victorian, inter-war, and post-war drainage systems. The River Wear's influence on groundwater levels affects properties in lower-lying areas.",
    responseTime: "typically within 60-75 minutes",
    propertyTypes: "traditional stone-built terraces, Victorian villas, inter-war semis, post-war council estates, and modern family homes"
  },
  richmond: {
    neighborhoods: ["Gallowfields", "Reeth Road", "Hurgill Road", "Cravengate", "Queens Road"],
    landmarks: ["Richmond Castle", "the Georgian Theatre Royal", "Richmond Market Place", "the River Swale", "Easby Abbey"],
    drainageInfo: "Richmond's dramatic hilltop position and medieval town layout create unique drainage challenges. The steep cobbled streets and historic buildings in the town centre sit above the River Swale, with drainage systems that have evolved over centuries. Properties near the river face flood risk during heavy rainfall, while the town's limestone geology affects groundwater movement and pipe stability.",
    responseTime: "typically within 60-75 minutes",
    propertyTypes: "Georgian townhouses, stone-built cottages, Victorian terraces, and modern housing on the outskirts"
  },
  northallerton: {
    neighborhoods: ["Romanby", "Brompton", "Northallerton Town Centre", "Bullamoor", "Yafforth Road"],
    landmarks: ["Northallerton High Street", "the Town Hall", "Northallerton Railway Station", "Romanby Golf Club", "the Applegarth"],
    drainageInfo: "Northallerton is North Yorkshire's county town, with a long High Street dating back to medieval times. The town's drainage infrastructure ranges from older clay pipe systems beneath the historic centre to modern installations in surrounding residential developments. The flat terrain and clay soils in the Vale of Mowbray can cause waterlogging and slow drainage during wet weather.",
    responseTime: "typically within 60-90 minutes",
    propertyTypes: "period properties along the High Street, Victorian and Edwardian terraces, inter-war semis, and modern housing estates"
  },
  catterick: {
    neighborhoods: ["Catterick Garrison", "Catterick Village", "Colburn", "Hipswell", "Scotton"],
    landmarks: ["Catterick Racecourse", "Catterick Garrison", "the River Swale", "St Anne's Church", "Colburn Town Centre"],
    drainageInfo: "Catterick's drainage character is shaped by its military garrison, which is one of the largest in Europe. The garrison area has its own extensive drainage network maintained to MOD standards, while Catterick Village and surrounding settlements have traditional systems ranging from Victorian to modern. The area's position in the Swale valley means some properties contend with higher water tables.",
    responseTime: "typically within 60-75 minutes",
    propertyTypes: "military quarters, traditional village cottages, modern garrison housing, and surrounding rural properties"
  },
  sedgefield: {
    neighborhoods: ["Sedgefield Village", "Bradbury", "Mordon", "Fishburn", "Bishop Middleham"],
    landmarks: ["Sedgefield Racecourse", "Hardwick Hall Country Park", "St Edmund's Church", "the Village Green", "Ceddesfeld Hall"],
    drainageInfo: "Sedgefield is a picturesque village with a mix of historic properties around its attractive green and newer developments on the outskirts. The older village properties feature traditional clay drainage systems, while surrounding housing estates have more modern installations. The area's clay soils and gentle undulations affect drainage performance, and properties near Hardwick Hall Country Park may experience root intrusion from mature trees.",
    responseTime: "typically within 60-75 minutes",
    propertyTypes: "traditional stone cottages, Georgian and Victorian properties, modern village housing, and surrounding rural homes"
  },
  "barnard-castle": {
    neighborhoods: ["Barnard Castle Town Centre", "Startforth", "Lartington", "Cotherstone", "Bowes"],
    landmarks: ["Barnard Castle ruins", "the Bowes Museum", "the River Tees", "Market Cross", "Deepdale Aqueduct"],
    drainageInfo: "Barnard Castle's position on the River Tees creates specific drainage challenges, particularly for properties near the riverbank. The historic town centre features stone-built properties with drainage systems dating back to the Georgian era and earlier. The surrounding Teesdale area has rural properties with private drainage systems, including septic tanks and soakaways, that require specialist knowledge.",
    responseTime: "typically within 75-90 minutes",
    propertyTypes: "historic stone-built town properties, Georgian houses, Victorian terraces, rural farmhouses, and modern developments"
  },
  shildon: {
    neighborhoods: ["Shildon Town Centre", "Eldon", "Old Shildon", "Middridge", "Redworth"],
    landmarks: ["Locomotion Museum", "Shildon Civic Hall", "the Timothy Hackworth Museum", "Brusselton Incline", "Redworth Hall"],
    drainageInfo: "Shildon's proud railway heritage is reflected in its housing stock and infrastructure. The town's terraced housing built for railway workers in the Victorian era features original clay pipe drainage that is now well over a century old. Post-war council housing has drainage from the mid-20th century. The town's position on sloping ground means drainage gradients are generally good, but the ageing pipework requires regular maintenance.",
    responseTime: "typically within 45-60 minutes",
    propertyTypes: "Victorian railway terraces, inter-war council housing, post-war estates, and modern infill developments"
  }
};

/**
 * Service-specific content for each location
 */
export interface ServiceContent {
  intro: string;
  commonProblems: string[];
  process: string;
  localTip: string;
}

type LocationServiceContentMap = Record<string, Record<string, ServiceContent>>;

export const LOCATION_SERVICE_CONTENT: LocationServiceContentMap = {
  darlington: {
    "blocked-drains": {
      intro: "Darlington's mix of Victorian terraces, Edwardian semis, and modern housing estates means blocked drains can affect properties of all ages and types. Our experienced engineers understand the drainage challenges facing properties across the town and respond quickly to restore your system to full working order.",
      commonProblems: ["Fat and grease buildup in kitchen drains", "Tree root intrusion from mature street trees in established residential areas", "Debris accumulation in Victorian clay pipes around the town centre", "Wet wipe blockages in older terraced housing", "Foreign object obstructions in commercial premises"],
      process: "We begin with a thorough assessment of your drainage system, often using CCTV cameras to pinpoint the exact location and cause of the blockage. Our high-pressure jetting equipment can clear even the most stubborn obstructions, and we always provide advice on preventing future blockages.",
      localTip: "Properties near Darlington's tree-lined avenues in Mowden and Cockerton should consider annual drain inspections to catch root intrusion early."
    },
    "drain-unblocking": {
      intro: "When your drains back up in Darlington, you need a fast response from engineers who know the local area. Whether you're in Cockerton, Haughton, or the town centre, our drain unblocking teams are strategically positioned across the area to reach you quickly and resolve the problem efficiently.",
      commonProblems: ["Kitchen sink blockages from food waste", "Bathroom drain clogs from hair and soap scum", "External drain blockages from leaves and debris", "Shared drainage issues in older terraced properties", "Commercial kitchen drain problems"],
      process: "Our engineers arrive equipped with manual rods, electric eels, and high-pressure jetting equipment to handle any unblocking situation. We identify the blockage type, select the appropriate method, and clear your drains while minimising disruption to your property.",
      localTip: "Darlington's restaurants and takeaways along Skinnergate and Bondgate benefit from grease trap maintenance to prevent drain blockages."
    },
    "cctv-drain-surveys": {
      intro: "Understanding what's happening inside your Darlington property's drainage system has never been easier. Our advanced CCTV drain surveys provide crystal-clear footage of pipe conditions, helping identify issues before they become emergencies. This is particularly valuable for Darlington's older properties with Victorian-era drainage.",
      commonProblems: ["Hidden cracks in ageing clay pipes", "Displaced joints causing leaks", "Root ingress at pipe connections", "Scale and deposit buildup", "Structural damage from subsidence"],
      process: "We insert a high-definition camera into your drainage system, recording footage that clearly shows the condition of your pipes. You receive a detailed report with findings, recommendations, and annotated images showing any areas of concern.",
      localTip: "Buying a property in Darlington's established suburbs like Mowden or Hurworth? A pre-purchase CCTV survey can reveal hidden drainage issues that could cost thousands to repair."
    },
    "drain-jetting": {
      intro: "High-pressure drain jetting is the most effective way to clear stubborn blockages and clean Darlington's often ageing pipe systems. Our specialist equipment delivers water at pressures up to 4,000 PSI, cutting through grease, scale, and debris while being gentle on pipe walls.",
      commonProblems: ["Heavy grease accumulation", "Scale buildup in old pipes", "Compacted debris and sediment", "Root masses blocking flow", "General pipe cleaning needs"],
      process: "Our jetting equipment is carefully inserted into your drainage system, with the water pressure adjusted to suit your pipe type and condition. The rotating nozzle scours the pipe walls clean while flushing debris towards the sewer connection.",
      localTip: "Darlington's hard water supply from the Tees Valley contributes to scale buildup in pipes. Regular jetting every 12-18 months keeps systems flowing freely."
    },
    "emergency-drain-services": {
      intro: "Drainage emergencies don't wait for convenient times, and neither do we. Our Darlington emergency response teams operate around the clock, ready to tackle overflowing drains, flooding, and sewage backups anywhere in the town. From Haughton family homes to town centre businesses, we're there when you need us most.",
      commonProblems: ["Overflowing manholes and drains", "Sewage backing up into properties", "Flooding from blocked surface drains", "Collapsed drains causing sinkholes", "Foul odours indicating serious problems"],
      process: "Call our emergency line and we'll dispatch the nearest available engineer to your Darlington location. They'll assess the situation, implement immediate containment if needed, and work to resolve the emergency quickly and safely.",
      localTip: "Know where your external manhole covers are located. In a drainage emergency, this information helps our engineers begin work immediately upon arrival."
    },
    "drain-repairs": {
      intro: "Darlington's mix of Victorian infrastructure and modern developments means drain repairs require both traditional skills and contemporary techniques. Our repair specialists handle everything from patching minor cracks to complete pipe replacement, always selecting the most cost-effective approach for your specific situation.",
      commonProblems: ["Cracked and fractured pipes", "Displaced or misaligned joints", "Tree root damage", "Corrosion in metal pipes", "Subsidence-related damage"],
      process: "We assess the damage using CCTV inspection, then recommend the most appropriate repair method. Options range from no-dig pipe relining for accessible damage to excavation for severely collapsed sections. All repairs come with our workmanship guarantee.",
      localTip: "Darlington's clay subsoil can cause pipe movement during wet and dry cycles. Watch for slow drainage or damp patches as early warning signs."
    }
  },
  "newton-aycliffe": {
    "blocked-drains": {
      intro: "Newton Aycliffe's new town housing stock, built primarily in the 1940s through to the 1960s, presents specific drainage challenges as these mid-century systems reach the end of their design life. Our Newton Aycliffe blocked drain specialists understand how the town's planned layout and ageing infrastructure affect drainage performance.",
      commonProblems: ["Deteriorating concrete pipe joints in post-war housing", "Root intrusion from maturing street trees on established estates", "Fat and grease from domestic kitchens", "Debris buildup in surface water drains", "Blockages in shared drainage runs"],
      process: "We assess your Newton Aycliffe property's drainage configuration, taking into account the era of construction and typical pipe materials used. Our engineers are experienced with all property types found across the town and select the most effective clearing method for each situation.",
      localTip: "Newton Aycliffe properties in the Woodham area should ensure external drains have adequate gully pots to catch debris before it enters the pipe system, particularly after heavy rain."
    },
    "drain-unblocking": {
      intro: "When drains block in Newton Aycliffe, our local teams respond with the urgency and expertise your situation demands. Whether you're dealing with a backed-up kitchen sink in Horndale or an overflowing external drain in Woodham, we'll have your drainage flowing freely again.",
      commonProblems: ["Hair and soap accumulation in bathroom drains", "Food waste blockages in kitchen sinks", "External gully blockages from garden debris", "Toilet blockages from inappropriate flushing", "Fat buildup in shared drainage"],
      process: "Our Newton Aycliffe-based engineers carry comprehensive unblocking equipment including flexible rods, electromechanical machines, and water jetting units. We select the appropriate tool for each blockage type and clear your drains with minimal disruption.",
      localTip: "Newton Aycliffe's original post-war drainage systems often have shallow manholes that are easily accessed. Regular clearing prevents serious blockages from developing."
    },
    "cctv-drain-surveys": {
      intro: "Whether you're purchasing a property in Woodham or investigating drainage issues in an older part of Newton Aycliffe, our CCTV drain surveys provide the answers you need. High-definition cameras reveal the true condition of underground pipes, helping you make informed decisions.",
      commonProblems: ["Unknown pipe routes in extended properties", "Condition assessment for property purchases", "Investigation of recurring blockage causes", "Insurance claim documentation", "Planning for extensions or renovations"],
      process: "Our survey technicians access your drainage system through manholes or inspection chambers, then guide the camera through the entire pipe network. The real-time footage is recorded and later compiled into a comprehensive report for your records.",
      localTip: "Newton Aycliffe properties built in the 1950s and 60s may have original concrete drainage that has never been surveyed. A CCTV inspection can reveal hidden deterioration before it causes problems."
    },
    "drain-jetting": {
      intro: "High-pressure jetting is the gold standard for drain cleaning in Newton Aycliffe, equally effective on ageing concrete pipes in the original town housing and modern systems in newer developments around Woodham. Our specialist equipment removes years of accumulated deposits, restoring your drainage to optimal flow capacity.",
      commonProblems: ["Grease accumulation in kitchen drains", "Scale deposits from water supply", "Silt and sediment in surface water drains", "Root fragments after removal treatments", "General maintenance cleaning"],
      process: "We select the appropriate jetting nozzle and pressure setting for your pipe type and the deposits being removed. The jetting process works upstream from the blockage point, ensuring debris is flushed towards the sewer rather than further into your system.",
      localTip: "Newton Aycliffe's industrial estate businesses should schedule regular jetting to comply with environmental regulations and prevent emergency callouts."
    },
    "emergency-drain-services": {
      intro: "Drainage emergencies across Newton Aycliffe receive our immediate attention, with engineers stationed to respond rapidly to properties from Aycliffe Village to Simpasture. Sewage backups, flooding, and overflowing drains are all handled swiftly and professionally.",
      commonProblems: ["Sewage backing up through toilets and sinks", "Surface water flooding during heavy rain", "Manhole overflows affecting multiple properties", "Drain collapses causing ground instability", "Foul odours indicating pipe damage"],
      process: "Emergency calls are prioritised and dispatched to our nearest available engineer. We provide estimated arrival times and keep you informed throughout. On arrival, we secure the area, diagnose the problem, and implement the fastest effective solution.",
      localTip: "Newton Aycliffe properties in lower-lying areas should have emergency drainage contacts readily available, particularly during periods of heavy rainfall."
    },
    "drain-repairs": {
      intro: "Newton Aycliffe's post-war housing stock requires drainage repair expertise suited to mid-century construction methods. Our repair teams handle everything from relining deteriorating concrete pipes to replacing damaged sections in the original town drainage, always using materials and methods appropriate for your property.",
      commonProblems: ["Cracked concrete pipes from the 1950s-60s", "Joint displacement from ground settlement", "Root damage requiring pipe replacement", "Corrosion in older metal connections", "Damage from property extensions"],
      process: "Following CCTV diagnosis, we recommend the most appropriate repair approach. No-dig relining is ideal for accessible cracks and joints, while excavation may be necessary for collapsed sections. We always restore surfaces to their original condition.",
      localTip: "Newton Aycliffe's post-war drainage was designed for smaller households. If your property has been extended, ensure the drainage capacity matches current demand."
    }
  },
  "bishop-auckland": {
    "blocked-drains": {
      intro: "Bishop Auckland's blend of historic market town properties and surrounding village housing creates varied drainage challenges. From the traditional stone-built properties near Auckland Castle to modern family homes on the outskirts, our Bishop Auckland blocked drain experts bring local knowledge and specialist equipment to clear any obstruction.",
      commonProblems: ["Debris and grease accumulation in traditional stone properties", "Root intrusion from established gardens and churchyard trees", "Sediment buildup in older clay pipe systems", "Blocked gullies from fallen leaves in tree-lined streets", "Foreign objects in commercial premises around the Market Place"],
      process: "We assess your Bishop Auckland property's drainage layout and age before selecting the most effective clearing approach. Our engineers understand the varied property types across the town and surrounding villages, adapting their methods accordingly.",
      localTip: "Bishop Auckland properties near Auckland Castle and the surrounding parkland should be alert to root intrusion from the mature trees in the grounds."
    },
    "drain-unblocking": {
      intro: "Fast, reliable drain unblocking across Bishop Auckland and surrounding villages including West Auckland, Etherley, and Cockton Hill. Our engineers respond promptly with the right equipment for any unblocking situation.",
      commonProblems: ["Kitchen sink blockages from food waste and grease", "Bathroom drain clogs in older properties", "External drain blockages from garden debris", "Toilet blockages from inappropriate items", "Shared drainage issues in terraced housing"],
      process: "Our Bishop Auckland engineers carry a full range of unblocking equipment to handle any situation. We diagnose the blockage type, select the appropriate clearing method, and restore full drainage flow with minimal disruption.",
      localTip: "Bishop Auckland's older terraced housing along Cockton Hill Road often has shared rear drainage. If your neighbour is also experiencing slow drains, the blockage may be in a shared pipe."
    },
    "cctv-drain-surveys": {
      intro: "Professional CCTV drain surveys across Bishop Auckland, providing detailed assessments for homebuyers, property owners, and businesses. Our surveys are particularly valuable for the town's older properties where drainage condition may be unknown.",
      commonProblems: ["Condition assessment for period properties near Auckland Castle", "Pre-purchase surveys for homes across Bishop Auckland", "Investigation of persistent drainage odours", "Insurance documentation for drainage claims", "Planning surveys for property renovations"],
      process: "Our survey team accesses your drainage through existing manholes and inspection chambers, recording high-definition footage of the entire pipe network. You receive a comprehensive report with condition assessments and recommendations.",
      localTip: "Considering buying a property near the River Wear in Bishop Auckland? A CCTV drain survey can identify flood-related drainage damage that may not be visible on the surface."
    },
    "drain-jetting": {
      intro: "High-pressure jetting effectively maintains Bishop Auckland's varied drainage systems, from traditional stone channels in period properties to modern plastic pipes in newer estates. Our specialist equipment clears the silt, scale, and debris that accumulate in local drainage throughout County Durham.",
      commonProblems: ["Grease and fat deposits in kitchen drainage", "Scale buildup from hard water supply", "Silt from nearby river and stream courses", "Root fragments from established trees", "General maintenance requirements"],
      process: "We assess pipe condition and material before selecting the appropriate jetting pressure. Our equipment handles everything from gentle cleaning of older clay pipes to aggressive descaling of modern systems.",
      localTip: "Bishop Auckland properties near the River Wear should maintain clear surface water drains year-round, as river levels can rise rapidly after sustained rainfall."
    },
    "emergency-drain-services": {
      intro: "Bishop Auckland drainage emergencies receive rapid response from our local teams, whether you're dealing with flooding near the River Wear or sewage backup in Cockton Hill. Our engineers are available around the clock, equipped to handle emergencies across the town and surrounding villages.",
      commonProblems: ["Sewage backing up into ground floor rooms", "Surface water flooding during heavy rain", "Overflowing manholes in terraced streets", "Collapsed drains beneath older properties", "Foul odours from drainage failures"],
      process: "Emergency calls are given immediate priority. We dispatch the nearest available engineer with pumping, jetting, and containment equipment to manage the situation and resolve the underlying cause.",
      localTip: "Bishop Auckland properties near the River Wear should know their flood risk status and keep emergency drain contacts readily accessible."
    },
    "drain-repairs": {
      intro: "Bishop Auckland's diverse property stock requires drainage repair expertise covering centuries of construction methods. Our repair teams handle everything from relining Victorian clay pipes to replacing damaged sections beneath modern estates, always using appropriate materials and techniques.",
      commonProblems: ["Cracked clay pipes in Victorian properties", "Displaced joints from ground movement", "Root damage in established residential streets", "Corrosion in older metal pipework", "Damage from building settlement"],
      process: "Following CCTV diagnosis, we recommend the most cost-effective repair approach. No-dig relining minimises disruption for accessible damage, while excavation handles severe collapses. All work is guaranteed.",
      localTip: "Bishop Auckland's varied geology means ground conditions can change significantly between nearby properties. Always get a site-specific assessment before committing to a repair method."
    }
  },
  richmond: {
    "blocked-drains": {
      intro: "Richmond's stunning hilltop setting and medieval town layout create unique drainage challenges. From the cobbled Market Place to the properties perched above the River Swale, our engineers understand the specific drainage issues that affect this historic Yorkshire town.",
      commonProblems: ["Debris accumulation in historic stone-built drainage channels", "Root intrusion from castle grounds and riverside trees", "Sediment from the River Swale affecting lower properties", "Grease buildup in commercial premises around the Market Place", "Blockages in shared Victorian terraced drainage"],
      process: "We assess each Richmond property's unique position and drainage configuration, selecting clearing methods appropriate for the pipe materials and access conditions found across this historic town.",
      localTip: "Richmond properties near the River Swale should ensure drainage systems are properly maintained before autumn, when fallen leaves and rising water levels increase blockage risk."
    },
    "drain-unblocking": {
      intro: "Quick response drain unblocking across Richmond and surrounding areas. Whether you're in the historic town centre or on the outskirts, our engineers bring the right equipment and local knowledge to resolve blockages efficiently.",
      commonProblems: ["Kitchen sink blockages in commercial and residential properties", "Bathroom drain clogs from hair and soap", "External drain blockages from garden and riverside debris", "Toilet blockages in older properties", "Shared drainage issues in Georgian and Victorian housing"],
      process: "Our engineers carry comprehensive unblocking equipment suited to Richmond's varied property types. From gentle techniques for historic stone drainage to high-pressure jetting for modern systems, we match the method to your property.",
      localTip: "Richmond's steep streets mean drainage gradients are generally good, but debris can accumulate rapidly at lower collection points. Keep gullies clear to prevent backups."
    },
    "cctv-drain-surveys": {
      intro: "Professional CCTV drain surveys for Richmond's historic and modern properties. Our high-definition cameras reveal the true condition of drainage beneath the town's period buildings and newer developments alike.",
      commonProblems: ["Assessment of ancient stone drainage in the town centre", "Pre-purchase surveys for period properties", "Investigation of damp and drainage odours", "Mapping unknown drainage routes", "Post-flood damage assessment"],
      process: "Our survey team works carefully with Richmond's often complex drainage layouts, recording detailed footage and producing professional reports accepted by solicitors, insurers, and local authorities.",
      localTip: "Richmond's conservation area status means excavation work requires careful planning. A CCTV survey helps identify the least disruptive repair approach for listed or historic properties."
    },
    "drain-jetting": {
      intro: "High-pressure drain jetting tailored to Richmond's mix of historic and modern drainage systems. We adjust pressure and nozzle selection to suit each pipe type, from ancient stone channels to contemporary plastic installations.",
      commonProblems: ["Scale and mineral deposits from limestone geology", "Silt accumulation from riverside proximity", "Grease buildup in commercial kitchen drains", "Root mass removal", "General descaling and maintenance"],
      process: "We carefully assess pipe condition before jetting, ensuring pressure settings are appropriate for the pipe material. Our equipment effectively clears deposits while protecting the integrity of older drainage systems.",
      localTip: "Richmond's limestone geology can contribute to significant scale buildup in pipes. Regular jetting helps prevent gradual flow reduction in the town's period properties."
    },
    "emergency-drain-services": {
      intro: "Emergency drainage response across Richmond, with particular expertise in managing flood-risk situations near the River Swale. Our engineers are available 24/7 to tackle overflowing drains, sewage backups, and flooding emergencies.",
      commonProblems: ["River Swale-related flooding affecting drainage", "Sewage backup in lower-lying properties", "Manhole overflows during heavy rainfall", "Storm damage to drainage infrastructure", "Emergency situations in listed buildings"],
      process: "Emergency calls receive immediate priority. We dispatch engineers equipped for flood management, sewage containment, and emergency repairs. Our knowledge of Richmond's flood-risk areas ensures an informed response.",
      localTip: "Richmond properties close to the River Swale should have a flood action plan including emergency drainage contacts and knowledge of stopcock and manhole locations."
    },
    "drain-repairs": {
      intro: "Drain repairs in Richmond require sensitivity to the town's historic character and conservation area requirements. Our repair teams are experienced with the full range of techniques needed, from no-dig relining that preserves cobbled streets to careful excavation where necessary.",
      commonProblems: ["Deteriorating stone drainage channels", "Cracked clay pipes beneath historic buildings", "Root damage from riverside and garden trees", "Joint displacement from hillside ground movement", "Age-related pipe collapse"],
      process: "CCTV diagnosis guides our repair recommendations, with a strong preference for no-dig techniques in Richmond's conservation area. Where excavation is unavoidable, we work sensitively and reinstate surfaces to match their historic character.",
      localTip: "Richmond's hilly terrain can cause ground movement that stresses drainage pipes. Properties on slopes should schedule regular CCTV checks to catch developing problems early."
    }
  },
  northallerton: {
    "blocked-drains": {
      intro: "Northallerton's historic High Street and surrounding residential areas present a range of drainage challenges. From period properties in the town centre to modern housing estates in Romanby and beyond, our engineers deliver effective blocked drain solutions across North Yorkshire's county town.",
      commonProblems: ["Fat and grease buildup in town centre commercial properties", "Root intrusion from mature trees along established streets", "Clay pipe deterioration in Victorian-era housing", "Surface water drainage issues from flat terrain", "Blockages in shared drainage runs"],
      process: "We assess each Northallerton property's drainage configuration and age, selecting the most effective approach for the pipe materials and blockage type encountered. Our equipment handles all situations from simple clogs to complex downstream obstructions.",
      localTip: "Northallerton's position in the Vale of Mowbray means flat terrain and clay soils can slow drainage. Ensure gutters and downpipes are clear to reduce pressure on underground systems."
    },
    "drain-unblocking": {
      intro: "Reliable drain unblocking across Northallerton, Romanby, and surrounding villages. Our local engineers carry the full range of equipment needed to clear blockages in any property type found across this North Yorkshire market town.",
      commonProblems: ["Kitchen drain blockages from cooking fats", "Bathroom clogs from hair and toiletries", "External gully blockages from garden waste", "Toilet blockages from inappropriate items", "Commercial kitchen drainage issues"],
      process: "Our engineers arrive with rods, electromechanical machines, and jetting equipment, selecting the best approach for your specific blockage. We clear the obstruction and advise on prevention.",
      localTip: "Northallerton's High Street businesses should implement regular drainage maintenance to prevent peak-time emergency situations."
    },
    "cctv-drain-surveys": {
      intro: "CCTV drain surveys across Northallerton, providing the detailed information property owners, buyers, and businesses need. Our professional reports meet the standards required by solicitors, mortgage lenders, and insurers.",
      commonProblems: ["Pre-purchase assessments for Northallerton properties", "Investigation of recurring drainage issues", "Drainage mapping for property extensions", "Condition surveys for insurance purposes", "Planning assessments for new connections"],
      process: "We access the drainage system through existing manholes and guide our camera through the entire network. You receive a comprehensive report with annotated footage, condition assessments, and clear recommendations.",
      localTip: "Northallerton properties with extensions or conservatories may have drainage running beneath the additions. A CCTV survey maps these routes before any future building work."
    },
    "drain-jetting": {
      intro: "Effective drain jetting across Northallerton, maintaining both older clay pipe systems in the town centre and modern drainage in surrounding developments. Our variable-pressure equipment handles all pipe types safely and effectively.",
      commonProblems: ["Scale buildup in older pipework", "Grease deposits in commercial drainage", "Silt accumulation from clay soil conditions", "Root debris after clearing treatments", "Routine maintenance cleaning"],
      process: "We assess pipe material and condition before selecting jetting pressure. Our equipment delivers thorough cleaning while protecting pipe integrity, with before-and-after verification available.",
      localTip: "Northallerton's clay soil conditions mean pipes can accumulate silt faster than in sandy areas. Annual jetting helps maintain flow rates in older systems."
    },
    "emergency-drain-services": {
      intro: "Emergency drainage response across Northallerton and surrounding areas, available 24 hours a day, 7 days a week. Whether you're dealing with flooding on the High Street or a sewage emergency in Romanby, our engineers respond rapidly.",
      commonProblems: ["Sewage backup in residential properties", "Surface water flooding from overwhelmed drains", "Manhole overflows during storm events", "Drain collapses beneath established streets", "Commercial drainage emergencies"],
      process: "Emergency calls are prioritised immediately. We dispatch the nearest engineer with full emergency equipment including pumps, jetting gear, and containment materials.",
      localTip: "Northallerton's flat terrain means surface water can pool rather than drain naturally. If you notice standing water near your property during rain, contact us for a drainage assessment."
    },
    "drain-repairs": {
      intro: "Professional drain repairs across Northallerton, from no-dig relining that minimises disruption to full excavation where necessary. Our engineers handle repairs to all pipe types and ages found across this historic market town.",
      commonProblems: ["Aged clay pipes cracking and fragmenting", "Joint displacement from clay soil movement", "Root intrusion causing pipe damage", "Pipe corrosion in older metal sections", "Settlement damage in newer developments"],
      process: "CCTV diagnosis identifies the exact nature and extent of damage, guiding our repair recommendation. We explain all options clearly and provide fixed quotes before work begins.",
      localTip: "Northallerton's clay soils expand and contract with moisture changes, which can stress pipe joints over time. Regular monitoring of drainage performance helps catch problems early."
    }
  },
  catterick: {
    "blocked-drains": {
      intro: "Catterick's mix of military garrison housing, traditional village properties, and modern developments creates diverse drainage needs. Our engineers understand the different drainage systems across the area and bring the right expertise to every callout.",
      commonProblems: ["Debris accumulation in older village drainage", "Root intrusion from established trees", "Grease buildup in garrison catering facilities", "Surface water issues in low-lying areas near the River Swale", "Blockages in modern estate drainage"],
      process: "We tailor our approach to the property type and drainage system, whether it's a traditional village cottage or a modern family home. Our engineers carry equipment suited to all drainage configurations found across the Catterick area.",
      localTip: "Catterick Village properties near the River Swale should be particularly attentive to drainage maintenance during autumn and winter when flood risk increases."
    },
    "drain-unblocking": {
      intro: "Prompt drain unblocking across Catterick, Colburn, and the surrounding area. Our engineers respond quickly to clear blockages in all property types, from garrison quarters to village cottages.",
      commonProblems: ["Kitchen and bathroom blockages in family housing", "External drain clogs from garden debris", "Shared drainage issues in terraced housing", "Toilet blockages from inappropriate items", "Commercial kitchen waste accumulation"],
      process: "Our local engineers carry comprehensive equipment and respond promptly to all Catterick callouts. We clear the blockage efficiently and advise on preventing future issues.",
      localTip: "Catterick Garrison residents should report drainage issues promptly through the appropriate channels, as shared systems mean one blockage can affect multiple properties."
    },
    "cctv-drain-surveys": {
      intro: "CCTV drain surveys across the Catterick area, providing detailed drainage assessments for homebuyers, property owners, and landlords. Our professional surveys reveal hidden issues that surface inspection cannot detect.",
      commonProblems: ["Pre-purchase surveys for properties across the Catterick area", "Drainage condition assessment for rental properties", "Investigation of recurring problems", "Mapping drainage routes for extensions", "Insurance and claims documentation"],
      process: "Our technicians access the drainage through existing points and record comprehensive footage. You receive a professional report with condition assessments and recommendations.",
      localTip: "If you're buying a property near Catterick Racecourse or the River Swale, a CCTV survey can identify flood-related drainage damage that may not be apparent during a dry viewing."
    },
    "drain-jetting": {
      intro: "Professional drain jetting across Catterick and surrounding areas, effective on all pipe types from older clay systems to modern plastic installations. Our variable-pressure equipment delivers thorough cleaning safely.",
      commonProblems: ["Scale deposits from hard water", "Grease accumulation in kitchen drains", "Silt from nearby watercourses", "Root debris removal", "General maintenance cleaning"],
      process: "We assess pipe condition first, then select the appropriate pressure and nozzle. Our jetting process clears deposits thoroughly while protecting pipe integrity.",
      localTip: "Catterick properties with nearby trees should consider annual jetting to prevent root-related blockages from developing."
    },
    "emergency-drain-services": {
      intro: "24/7 emergency drainage response across Catterick, Colburn, and surrounding areas. Our engineers are ready to tackle flooding, sewage backup, and drainage failures at any time of day or night.",
      commonProblems: ["Sewage backup from overloaded systems", "Flooding from River Swale proximity", "Drain collapses in older infrastructure", "Storm water overwhelming drainage", "Emergency situations affecting multiple properties"],
      process: "Emergency calls receive immediate dispatch. Our engineers arrive with full emergency equipment and work to contain and resolve the situation as quickly as possible.",
      localTip: "Catterick properties in the Swale valley should have emergency contacts and a basic flood plan prepared, particularly during autumn and winter months."
    },
    "drain-repairs": {
      intro: "Professional drain repairs across the Catterick area, with expertise covering traditional village drainage systems and modern installations alike. We offer both no-dig solutions and excavation where needed.",
      commonProblems: ["Aged clay pipes in village properties", "Joint displacement from ground movement", "Root damage from established trees", "Deteriorating concrete pipes in post-war housing", "Flood-related pipe damage"],
      process: "CCTV diagnosis guides our repair recommendations. We explain all available options, provide fixed quotes, and carry out repairs to a high standard with our workmanship guarantee.",
      localTip: "Catterick's river valley location means some areas experience ground movement from seasonal water table changes. Regular drainage checks help identify stress on pipes before failure occurs."
    }
  },
  sedgefield: {
    "blocked-drains": {
      intro: "Sedgefield's attractive village setting with its mix of period and modern properties creates specific drainage needs. Our engineers bring local knowledge of the village and surrounding communities to every callout, handling everything from blocked drains in stone cottages to modern estate drainage issues.",
      commonProblems: ["Root intrusion from mature trees around the village green", "Clay pipe deterioration in older village properties", "Fat and grease buildup in kitchen drains", "Leaf debris blocking external gullies", "Surface water issues from clay soils"],
      process: "We assess each Sedgefield property's drainage age and configuration before selecting the most effective clearing method. Our equipment handles all situations from simple domestic blockages to complex drainage issues.",
      localTip: "Sedgefield properties near Hardwick Hall Country Park should be aware of root intrusion risk from the park's mature tree stock."
    },
    "drain-unblocking": {
      intro: "Reliable drain unblocking across Sedgefield and surrounding villages including Fishburn and Bishop Middleham. Our local engineers respond promptly with the equipment needed for any unblocking situation.",
      commonProblems: ["Kitchen sink blockages from cooking waste", "Bathroom drain clogs", "External drain blockages from garden debris", "Toilet blockages", "Shared drainage issues in older village housing"],
      process: "Our engineers carry rods, electromechanical machines, and jetting equipment, selecting the best method for your specific situation. We clear the blockage and advise on prevention.",
      localTip: "Sedgefield's village properties often have longer drainage runs to the main sewer. Regular maintenance prevents buildup in these extended pipe runs."
    },
    "cctv-drain-surveys": {
      intro: "CCTV drain surveys for Sedgefield properties, from period cottages around the green to modern housing on the outskirts. Our surveys provide the detailed information needed for property purchases, insurance claims, and maintenance planning.",
      commonProblems: ["Pre-purchase surveys for village properties", "Investigation of damp and drainage odours", "Drainage mapping for renovations", "Condition assessment of older systems", "Post-storm damage checks"],
      process: "Our technicians survey the entire drainage network, producing comprehensive footage and professional reports that are accepted by solicitors, insurers, and local authorities.",
      localTip: "Sedgefield's period properties may have drainage layouts that have evolved over many years. A CCTV survey maps the actual routes, which may differ from original plans."
    },
    "drain-jetting": {
      intro: "Professional drain jetting for Sedgefield properties, handling everything from gentle cleaning of period clay pipes to thorough descaling of modern systems. Our variable-pressure equipment maintains drainage performance across the village.",
      commonProblems: ["Scale buildup from hard water", "Grease deposits in kitchen drains", "Silt from clay soil conditions", "Root debris clearing", "Annual maintenance cleaning"],
      process: "We match jetting pressure and nozzle selection to your pipe type and condition, ensuring thorough cleaning without risking damage to older systems.",
      localTip: "Sedgefield's clay soils can contribute to silt accumulation in drainage. Annual jetting keeps village properties flowing freely."
    },
    "emergency-drain-services": {
      intro: "Emergency drainage response for Sedgefield and surrounding villages, available around the clock. Our engineers handle sewage emergencies, flooding, and drain collapses with professional urgency.",
      commonProblems: ["Sewage backup in residential properties", "Surface water flooding from overwhelmed village drains", "Manhole overflows", "Drain collapses in older infrastructure", "Storm damage to drainage systems"],
      process: "Emergency calls receive immediate priority. We dispatch engineers with full emergency equipment to contain and resolve the situation quickly.",
      localTip: "Sedgefield's rural drainage connections can be affected by agricultural activity in surrounding fields. If you notice unusual drainage behaviour after heavy rain, call us promptly."
    },
    "drain-repairs": {
      intro: "Expert drain repairs across Sedgefield, with sensitivity to the village's character and conservation requirements. Our repair options range from minimally disruptive relining to full excavation where necessary.",
      commonProblems: ["Aged clay pipes cracking in period properties", "Joint displacement from clay soil movement", "Root damage from mature village trees", "Pipe deterioration in older drainage runs", "Settlement-related damage"],
      process: "CCTV diagnosis identifies damage precisely, guiding our repair approach. We favour no-dig techniques in the village setting and reinstate all surfaces to match their surroundings.",
      localTip: "Sedgefield's conservation area status means excavation work may require additional planning. No-dig relining can often resolve pipe damage without disturbing the village streetscape."
    }
  },
  "barnard-castle": {
    "blocked-drains": {
      intro: "Barnard Castle's riverside location and historic town centre create distinctive drainage challenges. Our engineers understand the specific issues facing properties in this beautiful Teesdale market town, from flood-risk drainage near the River Tees to ageing systems beneath historic stone buildings.",
      commonProblems: ["River-related sediment in drainage near the Tees", "Root intrusion from mature trees in established gardens", "Grease buildup in town centre commercial properties", "Aged stone and clay drainage in historic buildings", "Surface water issues after heavy Teesdale rainfall"],
      process: "We assess each Barnard Castle property's position relative to the river and its drainage age before selecting clearing methods. Our engineers are experienced with the full range of property types and drainage systems found across Teesdale.",
      localTip: "Barnard Castle properties near the River Tees should ensure all drainage inspection chambers are accessible and maintained, particularly before the autumn flood-risk season."
    },
    "drain-unblocking": {
      intro: "Fast drain unblocking across Barnard Castle and surrounding Teesdale villages. Whether you're in the town centre or a rural property in Startforth or Cotherstone, we respond with the right equipment and expertise.",
      commonProblems: ["Kitchen and bathroom blockages in residential properties", "External drain clogs from garden and riverside debris", "Grease and fat in commercial premises", "Toilet blockages", "Blocked gullies from leaf fall"],
      process: "Our engineers carry comprehensive equipment for all unblocking situations. We select the appropriate method for your property type and drainage system, clearing the blockage and advising on prevention.",
      localTip: "Barnard Castle's exposed position in upper Teesdale means autumn leaf fall can be heavy. Keep gullies and drain covers clear to prevent blockages."
    },
    "cctv-drain-surveys": {
      intro: "Professional CCTV drain surveys in Barnard Castle and across Teesdale. Our detailed surveys are essential for understanding drainage condition in the town's historic properties and for pre-purchase assessments.",
      commonProblems: ["Assessment of historic stone drainage systems", "Pre-purchase surveys for period properties", "Investigation of damp related to drainage", "Post-flood damage assessment", "Drainage mapping for renovations"],
      process: "Our survey team carefully navigates the often complex drainage layouts found in Barnard Castle properties, producing detailed reports with footage, condition assessments, and prioritised recommendations.",
      localTip: "Barnard Castle's historic buildings may have drainage that has been modified multiple times over the centuries. A CCTV survey reveals the actual layout and condition."
    },
    "drain-jetting": {
      intro: "Drain jetting across Barnard Castle, with pressure and technique adapted to suit the town's range of drainage systems. From delicate cleaning of historic stone channels to thorough maintenance of modern installations.",
      commonProblems: ["Sediment from river proximity", "Scale deposits from Teesdale water supply", "Grease buildup in commercial properties", "Root debris from mature trees", "General maintenance requirements"],
      process: "We assess pipe material and condition carefully before jetting, selecting appropriate pressure for the system. Our equipment delivers effective cleaning while preserving pipe integrity.",
      localTip: "Barnard Castle's hard water from the Pennine uplands can cause significant scale buildup. Regular jetting prevents gradual flow restriction."
    },
    "emergency-drain-services": {
      intro: "Emergency drainage response for Barnard Castle and Teesdale, available 24/7. River Tees flood risk makes emergency preparedness particularly important for properties in this area.",
      commonProblems: ["River flooding overwhelming drainage systems", "Sewage backup during flood events", "Storm damage to drainage infrastructure", "Collapsed drains in historic buildings", "Emergency situations in isolated rural properties"],
      process: "Emergency calls receive immediate attention. We dispatch engineers with full emergency equipment, including pumps and containment gear essential for river-proximity situations.",
      localTip: "Barnard Castle residents near the River Tees should sign up for Environment Agency flood alerts and ensure drainage systems are well-maintained before flood-risk seasons."
    },
    "drain-repairs": {
      intro: "Sensitive drain repairs in Barnard Castle, respecting the town's historic character while delivering lasting solutions. Our engineers are experienced with repair techniques suited to period properties and conservation areas.",
      commonProblems: ["Deteriorating stone drainage channels", "Cracked clay pipes in historic buildings", "Root damage from riverside trees", "Flood-related pipe displacement", "Age-related pipe collapse"],
      process: "CCTV diagnosis identifies damage precisely. We favour no-dig techniques where possible to minimise disruption to Barnard Castle's historic streetscape, but can excavate where necessary.",
      localTip: "Barnard Castle's conservation area and many listed buildings mean repair work requires careful planning. We advise on the most appropriate techniques to satisfy both conservation requirements and drainage needs."
    }
  },
  shildon: {
    "blocked-drains": {
      intro: "Shildon's Victorian railway terraces and post-war housing estates each present different drainage challenges. Our engineers understand the typical pipe materials and layouts found across this historic railway town and bring the right equipment to resolve blockages efficiently.",
      commonProblems: ["Fat and grease buildup in terraced housing kitchen drains", "Root intrusion from street trees and hedgerows", "Deteriorating clay pipes in Victorian terraces", "Debris in surface water drains", "Blockages in shared rear drainage"],
      process: "We assess your Shildon property's era and drainage configuration before selecting the clearing method. Our engineers are experienced with the terraced housing and estate drainage typical of the town.",
      localTip: "Shildon's Victorian terraces often have shared rear drainage. If multiple properties are affected, the blockage may be in the communal drain rather than your private pipework."
    },
    "drain-unblocking": {
      intro: "Reliable drain unblocking across Shildon, from the Victorian terraces of Old Shildon to modern developments. Our engineers respond quickly with equipment suited to the town's varied housing stock.",
      commonProblems: ["Kitchen sink blockages from cooking waste", "Bathroom clogs in older properties", "External gully blockages", "Toilet blockages from inappropriate items", "Shared drainage problems in terraced streets"],
      process: "Our Shildon engineers carry the full range of unblocking equipment. We diagnose the blockage, clear it efficiently, and provide advice to prevent recurrence.",
      localTip: "Shildon's terraced housing means a blockage in one property can sometimes affect neighbours. If you're experiencing slow drains, check with your neighbours whether they have the same issue."
    },
    "cctv-drain-surveys": {
      intro: "CCTV drain surveys across Shildon, providing essential drainage intelligence for homebuyers, property owners, and landlords. Our surveys are particularly valuable for the town's older housing where drainage condition is often unknown.",
      commonProblems: ["Assessing ageing clay pipes in Victorian terraces", "Pre-purchase surveys for Shildon properties", "Investigation of persistent damp", "Drainage mapping for home improvements", "Insurance documentation"],
      process: "Our survey team accesses the drainage through manholes and inspection chambers, recording comprehensive footage of the entire network. Reports are delivered within 24 hours.",
      localTip: "Shildon's Victorian terraces were built with clay drainage designed for much smaller households. A CCTV survey can reveal whether your drainage has been upgraded to match modern demands."
    },
    "drain-jetting": {
      intro: "Effective drain jetting across Shildon, maintaining both the Victorian clay pipe systems in the older terraces and modern drainage in newer developments. Our equipment handles all pipe types safely.",
      commonProblems: ["Grease accumulation in kitchen drains", "Scale deposits in older pipework", "Silt and debris buildup", "Root fragment clearing", "Routine maintenance"],
      process: "We assess pipe material and condition before jetting, adjusting pressure appropriately. Our thorough cleaning restores full flow capacity and extends the life of your drainage system.",
      localTip: "Shildon's older clay drainage benefits from regular maintenance jetting to prevent the gradual buildup that leads to sudden blockages."
    },
    "emergency-drain-services": {
      intro: "Emergency drainage response across Shildon, available 24/7. Our engineers handle sewage emergencies, flooding, and drain collapses with the urgency these situations demand.",
      commonProblems: ["Sewage backup in terraced properties", "Surface water flooding during heavy rain", "Shared drain overflows affecting multiple homes", "Drain collapses in ageing infrastructure", "Foul odours from drainage failures"],
      process: "Emergency calls receive immediate priority. We dispatch engineers with pumping, jetting, and containment equipment to manage the emergency and resolve the cause.",
      localTip: "Shildon's terraced streets mean drainage emergencies can quickly affect multiple properties. Report problems early to prevent escalation."
    },
    "drain-repairs": {
      intro: "Drain repairs across Shildon, handling the full range of issues found in the town's Victorian and post-war housing stock. From no-dig relining to excavation, we select the most effective and economical approach.",
      commonProblems: ["Cracked and fragmenting clay pipes", "Displaced joints in Victorian drainage", "Root damage requiring pipe replacement", "Corroded metal pipe sections", "Subsidence-related damage"],
      process: "CCTV diagnosis guides our repair recommendation. No-dig relining is often ideal for Shildon's terraced properties where garden access is limited. Excavation is available for severe collapses.",
      localTip: "Shildon's sloping terrain generally provides good drainage gradients, but the Victorian pipework's age means regular monitoring is advisable to catch deterioration early."
    }
  }
};

/**
 * Shared templates used across all locations (with placeholders)
 */
export interface HowItWorksStep {
  title: string;
  description: string;
}

export const SERVICE_HOW_IT_WORKS: Record<string, HowItWorksStep[]> = {
  "blocked-drains": [
    { title: "Call & Describe", description: "Phone us and describe the symptoms — slow drainage, gurgling, bad smells, or standing water. We dispatch a local engineer to your {location} property, arriving {responseTime}." },
    { title: "On-Site Diagnosis", description: "Your engineer inspects all access points and, where necessary, deploys a CCTV drain camera to pinpoint the exact blockage location and cause inside the pipework." },
    { title: "Clear the Blockage", description: "Using high-pressure water jetting, mechanical rodding, or electromechanical cutting tools, we remove the obstruction completely and flush the line clean." },
    { title: "Flow Verification", description: "We run water through every affected fixture and inspect the drainage run to confirm full flow has been restored with no secondary issues." },
    { title: "Report & Prevention Advice", description: "You receive a summary of what caused the blockage and practical steps to prevent it recurring, tailored to your {location} property type." }
  ],
  "drain-unblocking": [
    { title: "Emergency Contact", description: "Call our {location} response line. We gather details about the affected fixtures — sinks, toilets, baths, or external drains — and dispatch the nearest available engineer." },
    { title: "Access & Assessment", description: "On arrival {responseTime}, we identify which section of drainage is affected and determine whether the blockage is localised or further downstream." },
    { title: "Select the Right Method", description: "Depending on the blockage type, we use manual drain rods, an electromechanical drain snake, or high-pressure jetting equipment to clear the obstruction." },
    { title: "Clear & Flush", description: "The blockage is fully removed and the line is flushed with water to confirm unimpeded flow from every connected appliance." },
    { title: "Aftercare Guidance", description: "We explain what caused the issue and offer practical advice on preventing future blockages in your {location} property." }
  ],
  "cctv-drain-surveys": [
    { title: "Book Your Survey", description: "Contact us to arrange a convenient time. We arrive at your {location} property {responseTime} with self-contained survey equipment — no preparation is needed on your part." },
    { title: "Camera Insertion", description: "We access the drainage system through manholes or inspection chambers and feed a high-definition waterproof camera through the entire pipe network." },
    { title: "Live Inspection", description: "The camera transmits real-time footage to a monitor, allowing us to identify cracks, root ingress, displaced joints, blockages, and other defects as we progress." },
    { title: "Detailed Report", description: "You receive a written report with annotated screenshots, a pipe condition summary, and prioritised recommendations for any repairs or maintenance needed." }
  ],
  "drain-jetting": [
    { title: "Initial Assessment", description: "We inspect your {location} drainage system to determine pipe material, diameter, and condition. This ensures we select the correct jetting pressure and nozzle." },
    { title: "CCTV Pre-Check", description: "Where appropriate, a brief camera inspection confirms the location and nature of deposits so jetting effort is directed precisely where it is needed." },
    { title: "High-Pressure Cleaning", description: "Our specialist jetting unit delivers water at pressures up to 4,000 PSI through a rotating nozzle, scouring the pipe walls clean and flushing debris towards the sewer." },
    { title: "Post-Jetting Verification", description: "A final camera pass confirms the pipe is clear. We compare before-and-after footage so you can see the improvement, and advise on a suitable maintenance interval." }
  ],
  "emergency-drain-services": [
    { title: "Immediate Call Handling", description: "Our 24/7 emergency line is always staffed. Describe the situation — flooding, sewage backup, or collapse — and we prioritise dispatch to your {location} address." },
    { title: "Rapid Arrival", description: "The nearest available emergency engineer heads to your property {responseTime}, equipped with pumping, jetting, and containment gear to handle any scenario." },
    { title: "Containment & Safety", description: "On arrival, we secure the affected area, isolate the drainage failure if possible, and begin removing standing water or sewage to limit property damage." },
    { title: "Emergency Resolution", description: "We diagnose the root cause and implement the fastest effective repair — clearing blockages, patching failures, or arranging follow-up work for structural damage." },
    { title: "Follow-Up Support", description: "Once the immediate emergency is resolved, we provide a written summary and, if further repairs are needed, schedule them at a time that suits you." }
  ],
  "drain-repairs": [
    { title: "Diagnostic Survey", description: "We begin with a CCTV inspection of your {location} property's drainage to map the damage precisely — cracks, collapses, displaced joints, or root penetration." },
    { title: "Repair Options Explained", description: "You receive a clear explanation of available repair methods: no-dig pipe relining for accessible damage, patch repairs for localised cracks, or excavation for severe collapses." },
    { title: "Carry Out Repairs", description: "Our engineers complete the agreed work using professional-grade materials. No-dig relining typically takes a few hours; excavation work is completed as quickly as conditions allow." },
    { title: "Quality Verification", description: "A post-repair CCTV inspection confirms the fix is sound. We restore any excavated surfaces and provide a written guarantee on all completed repair work." }
  ]
};

/**
 * Why Choose Us bullet points per service (with placeholders)
 */
export const SERVICE_WHY_CHOOSE_US: Record<string, string[]> = {
  "blocked-drains": [
    "Local engineers who respond to {location} properties {responseTime}",
    "No call-out fee — you only pay for completed work",
    "Equipment suited to {propertyTypes}",
    "Familiarity with Northumbrian Water infrastructure and local council requirements"
  ],
  "drain-unblocking": [
    "Rapid response across {location} — engineers arrive {responseTime}",
    "We carry manual rods, electric drain snakes, and jetting gear to every job",
    "Fixed pricing agreed before work starts, with no hidden charges",
    "Knowledge of drainage layouts common in {propertyTypes}"
  ],
  "cctv-drain-surveys": [
    "HD camera equipment producing detailed, professional-grade reports",
    "Engineers who understand drainage typical of {propertyTypes}",
    "Response to {location} bookings {responseTime}",
    "Reports accepted by solicitors, insurers, and Northumbrian Water"
  ],
  "drain-jetting": [
    "Variable-pressure jetting units safe for all pipe materials",
    "Rapid attendance at {location} properties {responseTime}",
    "Before-and-after CCTV footage included at no extra cost",
    "Experience with drainage found in {propertyTypes}"
  ],
  "emergency-drain-services": [
    "Genuine 24/7 availability — nights, weekends, and bank holidays included",
    "Emergency engineers reach {location} {responseTime}",
    "Fully equipped vans carrying pumps, jetting gear, and repair materials",
    "Experienced with flood-risk and sewage situations across Darlington and surrounding areas"
  ],
  "drain-repairs": [
    "Both no-dig relining and excavation capabilities in-house",
    "CCTV diagnosis included so you only pay for repairs actually needed",
    "Written workmanship guarantee on all completed repairs",
    "Engineers experienced with {propertyTypes} in {location}"
  ]
};

/**
 * FAQ templates per service (with placeholders resolved at build time)
 */
export interface FAQTemplate {
  question: string;
  answer: string;
}

export const SERVICE_FAQ_TEMPLATES: Record<string, FAQTemplate[]> = {
  "blocked-drains": [
    {
      question: "How quickly can you reach {location} to clear a blocked drain?",
      answer: "Our engineers are based across Darlington and surrounding areas and typically reach {location} {responseTime}. For urgent blockages causing flooding or sewage backup, we prioritise dispatch to minimise property damage."
    },
    {
      question: "What does it cost to clear a blocked drain in {location}?",
      answer: "Most standard blockages in {location} are resolved for between £80 and £150 with no call-out fee. We provide a fixed quote before starting any work, so you know exactly what you will pay. Complex blockages requiring jetting or excavation may cost more."
    },
    {
      question: "What are the most common causes of blocked drains in {location}?",
      answer: "In {location} we frequently encounter {commonProblem1} and {commonProblem2}. Properties such as {propertyTypes} can be particularly susceptible due to ageing pipework and mature vegetation."
    }
  ],
  "drain-unblocking": [
    {
      question: "How fast can you unblock a drain in {location}?",
      answer: "We aim to arrive at {location} properties {responseTime}. Once on site, most drain unblocking jobs are completed within one to two hours depending on the nature and location of the obstruction."
    },
    {
      question: "Do you charge a call-out fee for drain unblocking in {location}?",
      answer: "No. We never charge a call-out fee for drain unblocking in {location} or anywhere else across Darlington and surrounding areas. You only pay for the work carried out, and we confirm the price before we start."
    },
    {
      question: "Should I try to unblock the drain myself before calling you?",
      answer: "Simple blockages near the plughole may respond to a plunger or drain cleaner. However, if water is backing up from external drains or multiple fixtures are affected, professional equipment is needed. Attempting to rod shared drainage incorrectly can push the blockage further downstream."
    }
  ],
  "cctv-drain-surveys": [
    {
      question: "How much does a CCTV drain survey cost in {location}?",
      answer: "A standard residential CCTV drain survey in {location} typically costs between £150 and £300 depending on property size and drainage complexity. We provide a fixed quote beforehand. Properties such as {propertyTypes} with larger drainage networks may sit towards the upper end."
    },
    {
      question: "Do I need a CCTV drain survey before buying a property in {location}?",
      answer: "We strongly recommend a pre-purchase drain survey for {location} properties, especially older builds. Hidden drainage defects can cost thousands to repair and are not covered by standard homebuyer surveys. A CCTV inspection gives you negotiating power and peace of mind."
    },
    {
      question: "How long does a CCTV drain survey take in {location}?",
      answer: "A typical residential survey in {location} takes between one and two hours. You receive the full report with annotated footage within 24 hours. Larger properties or those with complex drainage layouts may require additional time."
    }
  ],
  "drain-jetting": [
    {
      question: "Is drain jetting safe for older pipes in {location}?",
      answer: "Yes, when carried out by qualified engineers. We adjust water pressure to suit the pipe material and condition — lower pressures for older clay pipes common in {location}, higher pressures for modern plastic systems. A brief CCTV check beforehand confirms the pipe can safely be jetted."
    },
    {
      question: "How much does drain jetting cost in {location}?",
      answer: "Drain jetting in {location} typically costs between £100 and £250 depending on the length of pipe and severity of deposits. We confirm the price before starting. Regular maintenance jetting is usually at the lower end of this range."
    },
    {
      question: "How often should drains be jetted in {location}?",
      answer: "For most {location} residential properties, jetting every 12 to 18 months keeps drainage flowing freely. Properties with mature trees nearby, or commercial kitchens producing grease, may benefit from more frequent cleaning — typically every 6 to 12 months."
    }
  ],
  "emergency-drain-services": [
    {
      question: "How quickly can you respond to a drain emergency in {location}?",
      answer: "Our emergency teams are positioned across Darlington and surrounding areas and reach {location} {responseTime}. We operate around the clock — 24 hours a day, 7 days a week, including bank holidays — so help is available whenever you need it."
    },
    {
      question: "What counts as a drainage emergency?",
      answer: "Situations requiring an emergency response include sewage backing up into your property, flooding from blocked or collapsed drains, overflowing manholes, and any drainage failure presenting a health risk. If in doubt, call us and we will advise whether an emergency visit is needed."
    },
    {
      question: "Do you charge more for emergency callouts in {location}?",
      answer: "We offer competitive fixed pricing for emergency callouts in {location} with no hidden charges. While emergency work may cost more than routine maintenance due to the urgency and equipment required, we always confirm the price before starting."
    }
  ],
  "drain-repairs": [
    {
      question: "How much do drain repairs cost in {location}?",
      answer: "Drain repair costs in {location} depend on the extent of damage and the method required. No-dig pipe relining typically ranges from £300 to £800 per section. Excavation repairs vary more widely depending on depth and access. We provide a detailed quote after CCTV diagnosis."
    },
    {
      question: "Can drains be repaired without digging in {location}?",
      answer: "In many cases, yes. No-dig pipe relining inserts a resin-coated liner into the damaged pipe, which cures to form a new pipe within the old one. This is ideal for cracks, joint displacement, and root damage in {location} properties, avoiding disruption to gardens, driveways, and landscaping."
    },
    {
      question: "How long do drain repairs take in {location}?",
      answer: "No-dig relining is typically completed in a single day. Excavation repairs may take one to three days depending on the extent of damage, pipe depth, and ground conditions in {location}. We always provide a realistic timeframe before work begins."
    }
  ]
};

/**
 * Interpolate placeholders in template strings with location-specific data
 */
export function interpolateLocationText(
  text: string,
  locationName: string,
  locationData: LocationData | null,
  serviceContent: ServiceContent | null
): string {
  let result = text.replace(/\{location\}/g, locationName);
  if (locationData) {
    result = result
      .replace(/\{responseTime\}/g, locationData.responseTime)
      .replace(/\{propertyTypes\}/g, locationData.propertyTypes)
      .replace(/\{neighborhood\}/g, locationData.neighborhoods[0] || '')
      .replace(/\{landmark\}/g, locationData.landmarks[0] || '');
  }
  if (serviceContent) {
    result = result
      .replace(/\{commonProblem1\}/g, serviceContent.commonProblems[0]?.toLowerCase() || 'debris accumulation')
      .replace(/\{commonProblem2\}/g, serviceContent.commonProblems[1]?.toLowerCase() || 'root intrusion');
  }
  return result;
}

/**
 * Get resolved FAQs for a specific location and service combination
 */
export function getLocationServiceFAQs(
  locationSlug: string,
  serviceSlug: string
): Array<{ question: string; answer: string }> {
  const locationData = LOCATION_DATA[locationSlug] || null;
  const serviceContent = LOCATION_SERVICE_CONTENT[locationSlug]?.[serviceSlug] || null;
  const templates = SERVICE_FAQ_TEMPLATES[serviceSlug];
  if (!templates) return [];

  const locationName = locationSlug.charAt(0).toUpperCase() + locationSlug.slice(1);
  return templates.map(t => ({
    question: interpolateLocationText(t.question, locationName, locationData, serviceContent),
    answer: interpolateLocationText(t.answer, locationName, locationData, serviceContent)
  }));
}

/**
 * Get content for a specific location and service combination
 */
export function getLocationServiceContent(locationSlug: string, serviceSlug: string): ServiceContent | null {
  const locationContent = LOCATION_SERVICE_CONTENT[locationSlug];
  if (!locationContent) return null;
  return locationContent[serviceSlug] || null;
}

/**
 * Get location data
 */
export function getLocationData(locationSlug: string): LocationData | null {
  return LOCATION_DATA[locationSlug] || null;
}
