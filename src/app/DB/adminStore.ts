

let adminData: {_id?: string} | null = null;

// eslint-disable-next-line @typescript-eslint/ban-types
export const setAdminData = (data: {}) => {
  adminData = data;
};

// eslint-disable-next-line @typescript-eslint/ban-types
export const getAdminData = (): {} | null => {
  return adminData;
};


export const getAdminId = () => {
    return adminData?._id;
}