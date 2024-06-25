"use client";

const TeamContainer = ({ title, modalTitle }) => {
  console.log("TeamContainer", title, modalTitle);
  return (
    <div className="bbx container mx-auto h-48 relative">
      <div
        className="bbx absolute inset-0 flex-center max-sm:mx-6 max-w-[850px] mx-auto rounded-lg"
        onClick={() => document.getElementById("my_modal_3").showModal()}>
        <div>
          <p className="text-4xl max-sm:text-2xl">{title ?? "Team Title"}</p>
        </div>
      </div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <ModalContent title={modalTitle} />
        </div>
      </dialog>
    </div>
  );
};

const ModalContent = ({ title }) => {
  return (
    <div>
      <h3 className="font-bold text-lg">Hello! {title ?? 'No Name'}</h3>
      <p className="py-4">Press ESC key or click on ✕ button to close</p>
    </div>
  )
}

export default TeamContainer;
