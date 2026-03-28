export interface JourneyMovement {
  id: string;
  date: string;
  location: string;
  coord: { lat: number; lng: number };
  description: string;
}

export interface JourneyHighlight {
  title: string;
  description: string;
}

export interface ProfileRelationship {
  name: string;
  impact: string;
}

export interface DiscipleProfile {
  id: string;
  name: string;
  title: string;
  themeColor: string;
  summary: string;
  movements: JourneyMovement[];
  highlights: JourneyHighlight[];
  relationships: ProfileRelationship[];
}

// This structure allows the Master CRM to easily push JSON profiles into this object or a separate file.
export const profileData: Record<string, DiscipleProfile> = {
  jesus: {
    id: "jesus",
    name: "Jesus Christ",
    title: "The Son of God",
    themeColor: "var(--color-blood)",
    summary: "The ultimate focal point of all redemption and sacrifice. Track His earthly movements resulting in perfect peace.",
    movements: [
      { id: "1", date: "Born ~4 BC", location: "Bethlehem", coord: { lat: 31.7054, lng: 35.2024 }, description: "Born in a manger to Mary and Joseph." },
      { id: "2", date: "~27 AD", location: "Jordan River", coord: { lat: 31.836, lng: 35.545 }, description: "Baptized by John the Baptist. The heavens opened." },
      { id: "3", date: "27-30 AD", location: "Sea of Galilee", coord: { lat: 32.819, lng: 35.597 }, description: "The core ministry: miracles, vast teachings, and calling the first disciples from their boats." },
      { id: "4", date: "30 AD", location: "Jerusalem", coord: { lat: 31.7683, lng: 35.2137 }, description: "Crucifixion on the cross, followed by the triumphant Resurrection sealing our peace." }
    ],
    highlights: [
      { title: "Sermon on the Mount", description: "Delivered the Beatitudes and the foundational teachings on love, grace, and the Kingdom of Heaven." },
      { title: "Feeding the 5,000", description: "Multiplied five loaves and two fish to feed a massive crowd, establishing His divine provision." },
      { title: "Walking on Water", description: "Demonstrated ultimate authority over the terrifying natural elements, commanding Peter to step out in faith." },
      { title: "The Last Supper", description: "Instituted the new covenant in His blood and body, preparing the disciples for the ultimate sacrifice." }
    ],
    relationships: [
      { name: "Peter", impact: "Restored him after his denial, calling him to 'Feed my sheep' and establishing him as a fearless pillar of the early church." },
      { name: "John", impact: "Entrusted the care of His own mother to John from the cross, cementing a bond of ultimate trust and divine love." },
      { name: "Thomas", impact: "Met his profound doubt with physical, undeniable proof of the Resurrection, transforming him into a missionary to the ends of the earth." },
      { name: "Mary Magdalene", impact: "Delivered her from seven demons, elevating her as the very first chosen witness to His glorious resurrection." }
    ]
  }
};
