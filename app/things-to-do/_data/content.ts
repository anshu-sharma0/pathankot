import { Clock, MapPin, Info, ArrowRight, Shield, Mountain, Sunrise, CloudRain, Sun, Calendar, Navigation, History, Leaf, Camera } from 'lucide-react';

export const topPlaces = [
  {
    name: 'Lakshmi Narayan Mandir',
    description: 'A symbol of architectural grandeur dedicated to Lord Vishnu and Goddess Lakshmi. With the gods statues in the main shrine and Lord Hanuman colossal statue in the courtyard, this is one of Pathankots most impressive temples.',
    time: '2 to 3 hours',
    tags: ['Family', 'Spiritual', 'Heritage'],
    type: 'Peaceful Hindu shrine',
    icon: Shield,
    color: 'from-amber-400 to-orange-500'
  },
  {
    name: 'Ashapurni Mandir',
    description: 'One of the oldest temples in Pathankot, housing the shrine of Ashapurni Mata. People travel from all around to seek blessings of the Goddess, believed to fulfil wishes of sincere devotees.',
    time: '3 to 4 hours',
    tags: ['Family', 'Spiritual'],
    type: 'Sacred shrine amidst lush greenery',
    icon: Leaf,
    color: 'from-emerald-400 to-green-600'
  },
  {
    name: 'Shani Dev Mandir',
    description: 'A well-known temple devoted to the god Shani. Travellers from all over the country go to this holy site in the hopes of receiving divine favour.',
    time: '1 to 2 hours',
    tags: ['Family', 'Spiritual'],
    type: 'Peaceful holy site',
    icon: Shield,
    color: 'from-blue-600 to-indigo-800'
  },
  {
    name: 'Kathgarh Temple',
    description: 'The Hindu mythological figure Bharat is claimed to have stopped here. The lingam is composed of two halves that are said to join together on Shivratri.',
    time: '2 to 3 hours',
    tags: ['Family', 'Spiritual', 'Heritage'],
    type: 'Revered Hindu shrine',
    icon: History,
    color: 'from-slate-400 to-slate-600'
  },
  {
    name: 'Kali Mata Mandir',
    description: 'An extremely well-known temple to the Hindu goddess Kali Mata. Known for its grand celebrations during Navratri. On Tuesdays, there is a special bhandaara.',
    time: '3 to 4 hours',
    tags: ['Family', 'Spiritual'],
    type: 'Temple dedicated to Kali Mata',
    icon: Shield,
    color: 'from-rose-500 to-red-700'
  },
  {
    name: 'Nurpur Fort',
    description: 'Built in the 10th century and formerly Dhameri Fort. A historical marvel built by Pathania Rajputs offering panoramic views of the surrounding landscape.',
    time: '3 to 4 hours',
    tags: ['Friends', 'Heritage', 'Views'],
    type: 'An awe-inspiring fort',
    icon: Camera,
    color: 'from-amber-600 to-orange-800'
  },
  {
    name: 'Nagni Temple',
    description: 'Dedicated to the Hindu serpent goddess. Water flows from beneath the spot where the goddess Nagni Mata image sits. Hosts a massive festival every Saturday in August.',
    time: '1 to 2 hours',
    tags: ['Spiritual', 'Nature'],
    type: 'Sacred temple for a peaceful experience',
    icon: Leaf,
    color: 'from-teal-400 to-emerald-600'
  },
  {
    name: 'Hydraulic Research Station',
    description: 'Set on the Chakki River, it examines river flow and water management. Great place to learn about hydraulic models and see displays of scale models of dams.',
    time: '2 to 3 hours',
    tags: ['Friends', 'Educational'],
    type: 'Insightful tourist destination',
    icon: Info,
    color: 'from-cyan-500 to-blue-600'
  },
  {
    name: 'Shahpurkandi Fort',
    description: 'An impressive 16th-century structure in a scenic location on the banks of the Ravi River in the Himalayan foothills. Offers stunning views.',
    time: '3 to 4 hours',
    tags: ['Friends', 'Heritage'],
    type: 'Ancient fort dating back to the 16th century',
    icon: History,
    color: 'from-stone-500 to-stone-700'
  },
  {
    name: 'Mukteshwar Temple',
    description: 'Also called Mukesaran Mandir, this Shiva Temple sits atop a hill on the Shahpur Kandi Dam Road. Widely regarded as one of the holiest sites serving as a cultural symbol.',
    time: '2 to 3 hours',
    tags: ['Spiritual', 'Views'],
    type: 'Revered Hindu shrine',
    icon: Mountain,
    color: 'from-indigo-400 to-purple-600'
  },
  {
    name: 'Ranjit Sagar Dam',
    description: 'Built on the River Ravi, this massive hydroelectric project offers wide, open views of water and hills. Great site to spend the day with loved ones.',
    time: '1 to 2 hours',
    tags: ['Friends', 'Nature'],
    type: 'Technology in the midst of nature',
    icon: Navigation,
    color: 'from-sky-400 to-blue-600'
  },
];

export const operatingHours = [
  { place: 'Lakshmi Narayan Temple', hours: '5:00 AM – 9:00 PM', fee: 'Free' },
  { place: 'Ashapurni Temple', hours: '5:00 AM – 9:00 PM', fee: 'Free' },
  { place: 'Kathgarh Temple', hours: 'Sunrise – Sunset', fee: 'Free' },
  { place: 'Ranjit Sagar Dam', hours: '9:00 AM – 5:00 PM', fee: 'Minimal / Free' },
  { place: 'Nurpur Fort', hours: 'Sunrise – Sunset', fee: 'Minimal' },
  { place: 'Shahpurkandi Fort', hours: 'Sunrise – Sunset', fee: 'Free' },
  { place: 'Hydraulic Research Station', hours: '10:00 AM – 5:00 PM (weekdays)', fee: 'Free' },
];

export const nearbyPlaces = [
  { name: 'Dalhousie', distance: '80 km', desc: 'Classic hill station with colonial churches, pine forests, and mountain views.' },
  { name: 'Dharamshala', distance: '90 km', desc: 'Home of the Tibetan government-in-exile. Buddhist monasteries and vibrant café culture.' },
  { name: 'Kangra Fort', distance: '95 km', desc: 'One of the oldest and largest forts in the Himalayas.' },
  { name: 'Chamba', distance: '120 km', desc: 'Mountain town of considerable antiquity, known for its ancient temples.' },
  { name: 'Khajjiar', distance: '100 km', desc: 'Known as the Mini Switzerland of India, a beautiful high altitude meadow.' },
];

export const seasons = [
  { name: 'Winter (Nov – Feb)', desc: 'Cool to cold, dry. Best for Temple visits, dam views, hill trips.', icon: Mountain },
  { name: 'Spring (Mar – Apr)', desc: 'Pleasant, mild. Best for All-round sightseeing, outdoor exploration.', icon: Sunrise },
  { name: 'Summer (May – Jun)', desc: 'Warm in the city, cool in the hills. Best for Hill station extensions.', icon: Sun },
  { name: 'Monsoon (Jul – Sep)', desc: 'Heavy rain, lush green. Best for Scenic beauty, flexible indoor plans.', icon: CloudRain },
  { name: 'Autumn (Oct)', desc: 'Clear skies, comfortable. Excellent all-round season.', icon: Calendar },
];
