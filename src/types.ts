export type UserInfo = {
  id: string;
  isAdmin: boolean;
  regDate: string;
  notificationCheckedAt: string;
  email: string;
  localId: string;
  fbName: string;
  nickname: { nickname: string; tag: string };
};

export type Table = {
  isPrimary: boolean;
  lecture_list: Array<Lecture>;
  semester: number;
  theme: number;
  title: string;
  updated_at: string;
  user_id: string;
  year: number;
  _id: string;
};

export type Lecture = {
  academic_year: string;
  category: string;
  class_time_json: Array<ClassTime>;
  class_time_mask: Array<number>;
  classification: string;
  colorIndex: number;
  course_number: string;
  course_title: string;
  credit: number;
  department: string;
  instructor: string;
  lecture_id: string;
  lecture_number: string;
  quota: number;
  remark: string;
  snuttEvLecture: {
    evLectureId: number;
  };
  _id: string;
};

type ClassTime = {
  day: number;
  endMinute: number;
  end_time: string;
  lectureBuildings: Array<{
    buildingNameEng: string;
    buildingNameKor: string;
    buildingNumber: string;
    campus: string;
    id: string;
    locationInDMS: {
      latitude: number;
      longitude: number;
    };
    locationInDecimal: {
      latitude: number;
      longitude: number;
    };
  }>;
  len: number;
  place: string;
  start: number;
  startMinute: number;
  start_time: string;
};
