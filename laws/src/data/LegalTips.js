const legalTipsData = [
  {
    id: 1,
    title: "How to Complain at a Police Station",
    category: "Complaint Filing",
    description: "You can go to any police station to file a case for a serious crime. This is called an FIR.",
    emergencyHelpline: "100 / 112"
  },
  {
    id: 2,
    title: "FIR Can Be Filed Anywhere",
    category: "FIR",
    description: "You can file an FIR at any police station, even if the crime happened somewhere else.",
    emergencyHelpline: "100 / 112"
  },
  {
    id: 3,
    title: "Police Must Take Your FIR",
    category: "Police Duty",
    description: "Police cannot refuse to take your FIR. If they do, you can complain to higher officers.",
    emergencyHelpline: "100 / 112"
  },
  {
    id: 4,
    title: "Get a Free Copy of FIR",
    category: "FIR",
    description: "After filing an FIR, ask for your free copy. This helps you follow your case.",
    emergencyHelpline: "100 / 112"
  },
  {
    id: 5,
    title: "You Can Stay Silent",
    category: "Police Questioning",
    description: "You can refuse to answer questions that may get you in trouble.",
    emergencyHelpline: "100 / 112"
  },
  {
    id: 6,
    title: "You Can Call Your Lawyer",
    category: "Legal Aid",
    description: "You can talk to your lawyer during police questioning or arrest.",
    emergencyHelpline: "100 / 112"
  },
  {
    id: 7,
    title: "Free Lawyer if You Can’t Afford",
    category: "Legal Aid",
    description: "If you have no money for a lawyer, ask for free legal help from the government.",
    emergencyHelpline: "100 / 112"
  },
  {
    id: 8,
    title: "Police Must Tell You Why You’re Arrested",
    category: "Arrest Rights",
    description: "Police must tell you the reason and the charges for your arrest.",
    emergencyHelpline: "100 / 112"
  },
  {
    id: 9,
    title: "When Police Need a Warrant",
    category: "Arrest Rights",
    description: "For many cases, police need a court order to arrest you.",
    emergencyHelpline: "100 / 112"
  },
  {
    id: 10,
    title: "Special Rules for Arresting Women",
    category: "Women’s Rights",
    description: "Women can’t be arrested at night without a court’s permission.",
    emergencyHelpline: "1091 / 181"
  },
  {
    id: 11,
    title: "Female Officer for Women",
    category: "Women’s Rights",
    description: "A woman must be arrested or searched only by a female police officer.",
    emergencyHelpline: "1091 / 181"
  },
  {
    id: 12,
    title: "You Can Call Family When Arrested",
    category: "Arrest Rights",
    description: "If you are arrested, you can call your family or a friend immediately.",
    emergencyHelpline: "100 / 112"
  },
  {
    id: 13,
    title: "Medical Check in Jail",
    category: "Custody Rights",
    description: "You have the right to a health check by a doctor every 2 days in custody.",
    emergencyHelpline: "100 / 112"
  },
  {
    id: 14,
    title: "Can’t Keep You More Than 24 Hours",
    category: "Custody Rights",
    description: "Police must take you to court within 24 hours of arrest.",
    emergencyHelpline: "100 / 112"
  },
  {
    id: 15,
    title: "Police Need Permission to Search Your Home",
    category: "Search & Seizure",
    description: "Police need a court order to search your house, except in emergencies.",
    emergencyHelpline: "100 / 112"
  },
  {
    id: 16,
    title: "Witnesses Must Be Present During Home Search",
    category: "Search & Seizure",
    description: "Police must bring local witnesses when searching your home.",
    emergencyHelpline: "100 / 112"
  },
  {
    id: 17,
    title: "No Unnecessary Handcuffs",
    category: "Arrest Rights",
    description: "Police can only handcuff you if there’s a risk you’ll escape or cause harm.",
    emergencyHelpline: "100 / 112"
  },
  {
    id: 18,
    title: "Bail from Police Station",
    category: "Bail Rights",
    description: "For minor crimes, you can get bail directly from the police station.",
    emergencyHelpline: "100 / 112"
  },
  {
    id: 19,
    title: "Apply for Bail Before Arrest",
    category: "Bail Rights",
    description: "If you fear arrest, you can apply for anticipatory bail from the court.",
    emergencyHelpline: "100 / 112"
  },
  {
    id: 20,
    title: "Traffic Police Can’t Take Your Keys",
    category: "Traffic Laws",
    description: "Traffic police are not allowed to snatch your vehicle keys.",
    emergencyHelpline: "100 / 112"
  },
  {
    id: 21,
    title: "Always Take the Fine Receipt",
    category: "Traffic Laws",
    description: "Police must give you a receipt for any fine they collect.",
    emergencyHelpline: "100 / 112"
  },
  {
    id: 22,
    title: "Ask for Police ID",
    category: "Police Duty",
    description: "You can ask to see the police officer’s ID card anytime.",
    emergencyHelpline: "100 / 112"
  },
  {
    id: 23,
    title: "No Forced Confessions",
    category: "Police Questioning",
    description: "Police cannot force or threaten you to admit guilt.",
    emergencyHelpline: "100 / 112"
  },
  {
    id: 24,
    title: "Check Your Statement",
    category: "Investigation",
    description: "Make sure your statement is written correctly and ask for a copy.",
    emergencyHelpline: "100 / 112"
  },
  {
    id: 25,
    title: "File a Case Online",
    category: "Complaint Filing",
    description: "You can file a police complaint online through your state police website.",
    emergencyHelpline: "100 / 112"
  },
  {
    id: 26,
    title: "Complain to Court if Police Refuse",
    category: "Complaint Filing",
    description: "If police don’t file your case, you can go directly to a magistrate.",
    emergencyHelpline: "100 / 112"
  },
  {
    id: 27,
    title: "No Arrest Without Proof",
    category: "Arrest Rights",
    description: "Police cannot arrest you without enough evidence for minor offences.",
    emergencyHelpline: "100 / 112"
  },
  {
    id: 28,
    title: "Police Must Keep Records of Arrests",
    category: "Police Duty",
    description: "Police must keep proper records of every arrest and share details with your family.",
    emergencyHelpline: "100 / 112"
  },
  {
    id: 29,
    title: "You Can Meet Family in Jail",
    category: "Custody Rights",
    description: "Prisoners can meet family, friends, or lawyers at fixed times.",
    emergencyHelpline: "100 / 112"
  },
  {
    id: 30,
    title: "Complain Against Bad Police Behaviour",
    category: "Police Duty",
    description: "You can report rude or corrupt police to the State Police Complaints Authority.",
    emergencyHelpline: "100 / 112"
  }
];

export default legalTipsData;
