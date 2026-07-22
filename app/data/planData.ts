import { Clock, Compass } from "lucide-react";

export const roadDistances = [
  { city: "Mukerian", distance: "40 km" },
  { city: "Dalhousie", distance: "82 km" },
  { city: "Dharamshala", distance: "90 km" },
  { city: "Chamba", distance: "118 km" },
  { city: "Palampur", distance: "115 km" },
  { city: "Jammu", distance: "105 km" },
  { city: "Amritsar", distance: "108 km" },
  { city: "Chandigarh", distance: "245 km" },
  { city: "Delhi", distance: "490 km" },
];

export const itineraries = [
  {
    title: "24 Hours in Pathankot",
    icon: Clock,
    tag: "Quick Trip",
    color: "amber",
    stops: [
      { time: "7:00 AM", place: "Mukteshwar Mahadev Temple — morning darshan" },
      { time: "10:00 AM", place: "Ranjit Sagar Dam — boating & views" },
      { time: "1:00 PM", place: "Local lunch — Chole Kulche at Dhangu Road" },
      { time: "3:00 PM", place: "Shahpurkandi Fort — riverside walk" },
      { time: "6:00 PM", place: "Pathankot market — local shopping & sweets" },
    ],
  },
  {
    title: "The Spiritual Trail",
    icon: Compass,
    tag: "2 Days",
    color: "purple",
    stops: [
      { time: "Day 1 AM", place: "Mukteshwar Mahadev Temple (cave shrine)" },
      { time: "Day 1 PM", place: "Kathgarh Mahadev Temple (dual Shivalingam)" },
      { time: "Day 2 AM", place: "Gurudwara Shri Barth Sahib" },
      { time: "Day 2 PM", place: "Kali Mata Mandir & Ashapurni Mandir" },
    ],
  },
];

export const gateways = [
  { name: "Dalhousie", distance: "82 km", time: "2.5 hrs", desc: "Colonial-era hill station with Kalatop Wildlife Sanctuary and Dainkund peak. A must-do day trip.", color: "emerald" },
  { name: "Dharamshala", distance: "90 km", time: "2.5 hrs", desc: "Home of the Dalai Lama and Tibetan govt-in-exile. Also the McLeod Ganj trekking hub.", color: "sky" },
  { name: "Chamba", distance: "118 km", time: "3.5 hrs", desc: "Ancient town along the Ravi river with stunning stone temples and famous Chamba Rumal embroidery.", color: "amber" },
  { name: "Jammu", distance: "105 km", time: "2.5 hrs", desc: "City of temples and gateway to Kashmir. Vaishno Devi pilgrimage base at Katra (150 km).", color: "rose" },
  { name: "Amritsar", distance: "108 km", time: "2.5 hrs", desc: "The Golden Temple, Wagah Border ceremony, and the legendary Amritsari kulcha.", color: "orange" },
  { name: "Basohli", distance: "45 km", time: "1.5 hrs", desc: "Offbeat gem known for ancient Basohli miniature paintings and lakeside scenery on the Ranjit Sagar reservoir.", color: "purple" },
];
