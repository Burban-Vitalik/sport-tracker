export type UseModal = {
  isOpen: boolean;
  openModal: VoidFunction;
  closeModal: VoidFunction;
  toggleModal: VoidFunction;
};
export const useModal: () => UseModal;
