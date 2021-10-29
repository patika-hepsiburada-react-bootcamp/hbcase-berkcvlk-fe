import { useContext } from "react";

import { ModalContext } from "contexts/modal/modal";

// To avoid import context and useContext everytime when it's needed
const useModal = () => useContext(ModalContext);

export default useModal;
