export interface Email {
  id: number;
  subject: string;
  sender: { name: string; email: string };
  recipient: string;
  date: string;
  isRead: boolean;
  preview: string;
  folder: "inbox" | "sent" | "spam";
}

const emails: Email[] = [
  {
    id: 1,
    subject: "Welcome to our platform!",
    sender: { name: "Support Team", email: "support@example.com" },
    recipient: "you@example.com",
    date: "2025-08-20T09:15:00Z",
    isRead: false,
    folder: "inbox",
    preview: "Thanks for signing up. We're excited to have you on board...",
  },
  {
    id: 2,
    subject: "Your invoice for August",
    sender: { name: "Billing", email: "billing@example.com" },
    recipient: "you@example.com",
    date: "2025-08-19T14:30:00Z",
    isRead: true,
    folder: "inbox",
    preview: "This is a reminder that your invoice for August is ready...",
  },
  {
    id: 3,
    subject: "Meeting rescheduled",
    sender: { name: "Anna Smith", email: "anna.smith@company.com" },
    recipient: "you@example.com",
    date: "2025-08-18T11:00:00Z",
    isRead: false,
    folder: "inbox",
    preview: "Hi, the meeting has been moved to Thursday at 3 PM...",
  },
  {
    id: 4,
    subject: "Weekly newsletter",
    sender: { name: "News Digest", email: "newsletter@example.com" },
    recipient: "you@example.com",
    date: "2025-08-17T08:45:00Z",
    isRead: true,
    folder: "inbox",
    preview: "In this week’s edition: industry trends, updates, and more...",
  },
  {
    id: 5,
    subject: "Project update",
    sender: { name: "John Doe", email: "john.doe@work.com" },
    recipient: "you@example.com",
    date: "2025-08-16T16:20:00Z",
    isRead: false,
    folder: "inbox",
    preview:
      "The project is progressing as planned, here are the latest notes...",
  },

  {
    id: 6,
    subject: "Discount just for you",
    sender: { name: "You", email: "you@example.com" },
    recipient: "promo@shopnow.com",
    date: "2025-08-15T10:10:00Z",
    isRead: true,
    folder: "sent",
    preview: "Enjoy 20% off your next order with this special coupon...",
  },
  {
    id: 7,
    subject: "Security alert",
    sender: { name: "Account Security", email: "you@example.com" },
    recipient: "security@example.com",
    date: "2025-08-14T21:55:00Z",
    isRead: false,
    folder: "sent",
    preview: "We noticed a new login to your account from a new device...",
  },
  {
    id: 8,
    subject: "Vacation photos",
    sender: { name: "Emily Clark", email: "you@example.com" },
    recipient: "emily.clark@gmail.com",
    date: "2025-08-13T13:45:00Z",
    isRead: true,
    folder: "sent",
    preview: "Just came back from Italy, sharing some of my favorite shots...",
  },
  {
    id: 9,
    subject: "Job opportunity",
    sender: { name: "HR Team", email: "you@example.com" },
    recipient: "hr@company.com",
    date: "2025-08-12T07:30:00Z",
    isRead: false,
    folder: "sent",
    preview: "We have an opening that matches your profile. Check it out...",
  },
  {
    id: 10,
    subject: "Dinner plans",
    sender: { name: "Michael Brown", email: "you@example.com" },
    recipient: "michael.brown@yahoo.com",
    date: "2025-08-11T18:40:00Z",
    isRead: true,
    folder: "sent",
    preview: "Are you free this Friday for dinner? Let me know...",
  },

  {
    id: 11,
    subject: "System maintenance notice",
    sender: { name: "IT Services", email: "it@company.com" },
    recipient: "you@example.com",
    date: "2025-08-10T05:20:00Z",
    isRead: true,
    folder: "spam",
    preview: "Scheduled maintenance will occur on Saturday at 2 AM...",
  },
  {
    id: 12,
    subject: "Happy Birthday!",
    sender: { name: "Friends Group", email: "friends@groupchat.com" },
    recipient: "you@example.com",
    date: "2025-08-09T09:00:00Z",
    isRead: false,
    folder: "spam",
    preview: "Wishing you a fantastic birthday filled with joy and fun...",
  },
];

export const getEmailsByFolder = (folder: Email["folder"]) => {
  return emails.filter((email) => email.folder === folder);
};

export const getEmailById = (emailId: Email["id"]) => {
  return emails.find((email) => email.id === emailId) ?? null;
};
