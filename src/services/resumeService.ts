
import { 
  collection, 
  getDocs, 
  doc, 
  getDoc, 
  setDoc, 
  updateDoc, 
  addDoc,
  serverTimestamp,
  DocumentData,
  Timestamp,
  writeBatch
} from "firebase/firestore";
import { db, testFirestoreConnection } from "@/config/firebase";

// Types for resume data
export interface PersonalInfo {
  name: string;
  fathersName: string;
  bloodGroup: string;
  languages: string[];
  phone: string;
  email: string;
  address: string;
  aboutMe: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
}

export interface SkillItem {
  id: string;
  name: string;
  icon: string;
}

export interface LanguageItem {
  id: string;
  name: string;
  level: number;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  date: string;
  location: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  organization: string;
  date: string;
  icon: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  organization: string;
  icon: string;
}

export interface CocurricularItem {
  id: string;
  activity: string;
  date: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt?: Timestamp;
}

// Function to get all personal information
export const getPersonalInfo = async (): Promise<PersonalInfo | null> => {
  try {
    const docRef = doc(db, "resume", "personalInfo");
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return docSnap.data() as PersonalInfo;
    } else {
      console.log("No personal information found");
      return null;
    }
  } catch (error) {
    console.error("Error getting personal info:", error);
    return null;
  }
};

// Function to update personal information
export const updatePersonalInfo = async (data: PersonalInfo): Promise<boolean> => {
  try {
    const docRef = doc(db, "resume", "personalInfo");
    await setDoc(docRef, data, { merge: true });
    return true;
  } catch (error) {
    console.error("Error updating personal info:", error);
    return false;
  }
};

// Function to get all education items
export const getEducation = async (): Promise<EducationItem[]> => {
  try {
    const educationCollection = collection(db, "resume", "education", "items");
    const snapshot = await getDocs(educationCollection);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as EducationItem[];
  } catch (error) {
    console.error("Error getting education:", error);
    return [];
  }
};

// Function to get all skills
export const getSkills = async (): Promise<SkillItem[]> => {
  try {
    const skillsCollection = collection(db, "resume", "skills", "items");
    const snapshot = await getDocs(skillsCollection);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as SkillItem[];
  } catch (error) {
    console.error("Error getting skills:", error);
    return [];
  }
};

// Function to get all programming languages
export const getLanguages = async (): Promise<LanguageItem[]> => {
  try {
    const languagesCollection = collection(db, "resume", "languages", "items");
    const snapshot = await getDocs(languagesCollection);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as LanguageItem[];
  } catch (error) {
    console.error("Error getting languages:", error);
    return [];
  }
};

// Function to get all projects
export const getProjects = async (): Promise<ProjectItem[]> => {
  try {
    const projectsCollection = collection(db, "resume", "projects", "items");
    const snapshot = await getDocs(projectsCollection);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as ProjectItem[];
  } catch (error) {
    console.error("Error getting projects:", error);
    return [];
  }
};

// Function to get all certificates
export const getCertificates = async (): Promise<CertificateItem[]> => {
  try {
    const certificatesCollection = collection(db, "resume", "certificates", "items");
    const snapshot = await getDocs(certificatesCollection);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as CertificateItem[];
  } catch (error) {
    console.error("Error getting certificates:", error);
    return [];
  }
};

// Function to get all achievements
export const getAchievements = async (): Promise<AchievementItem[]> => {
  try {
    const achievementsCollection = collection(db, "resume", "achievements", "items");
    const snapshot = await getDocs(achievementsCollection);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as AchievementItem[];
  } catch (error) {
    console.error("Error getting achievements:", error);
    return [];
  }
};

// Function to get all cocurricular activities
export const getCocurricular = async (): Promise<CocurricularItem[]> => {
  try {
    const cocurricularCollection = collection(db, "resume", "cocurricular", "items");
    const snapshot = await getDocs(cocurricularCollection);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as CocurricularItem[];
  } catch (error) {
    console.error("Error getting cocurricular activities:", error);
    return [];
  }
};

// Function to add a contact message with enhanced error handling
export const addContactMessage = async (message: ContactMessage): Promise<string | null> => {
  try {
    // First verify connection
    const isConnected = await testFirestoreConnection();
    if (!isConnected) {
      console.error("Firebase connection test failed before sending message");
      throw new Error("Cannot connect to database");
    }
    
    console.log("Firebase connection verified, proceeding to send message");
    console.log("Sending message data:", message);
    
    const contactCollection = collection(db, "contactMessages");
    
    const messageWithTimestamp = {
      ...message,
      createdAt: serverTimestamp()
    };
    
    // Try to use batch write for better error handling
    try {
      const batch = writeBatch(db);
      const newDocRef = doc(contactCollection);
      batch.set(newDocRef, messageWithTimestamp);
      
      console.log("Committing batch write to Firestore...");
      await batch.commit();
      
      console.log("Message sent successfully with ID:", newDocRef.id);
      return newDocRef.id;
    } catch (batchError) {
      console.error("Batch write failed, trying regular addDoc:", batchError);
      
      // Fallback to regular addDoc
      const docRef = await addDoc(contactCollection, messageWithTimestamp);
      console.log("Message sent successfully with ID (fallback):", docRef.id);
      return docRef.id;
    }
  } catch (error) {
    console.error("Error adding contact message:");
    
    if (error instanceof Error) {
      console.error("Error message:", error.message);
      console.error("Error stack:", error.stack);
    } else {
      console.error("Unknown error type:", error);
    }
    
    return null;
  }
};

// Export the Firebase connection test function
export { testFirestoreConnection };
