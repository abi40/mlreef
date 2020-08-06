import React from 'react';
import { RUNNING, SUCCESS, PENDING } from 'dataTypes';
import { shape, func, bool, string } from 'prop-types';


const DeleteExperimentModal = ({
  experiment,
  handleDeleteExp,
  handleCloseModal,
  shouldRender,
}) => {
  if (!shouldRender) {
    return null;
  }
  let experimentStatusColor;
  switch (experiment.status) {
    case RUNNING:
      experimentStatusColor = 'var(--success)';
      break;
    case SUCCESS:
      experimentStatusColor = 'var(--success)';
      break;
    case PENDING:
      experimentStatusColor = 'var(--warning)';
      break;
    default:
      experimentStatusColor = 'var(--danger)';
      break;
  }
  return (
    <div id="select-data-modal-div" className="modal modal-danger modal-lg dark-cover show">
      <div className="modal-cover" />
      <div className="modal-container experiment-modal">
        <div className="modal-container-close">
          <button
            id="close-modal"
            type="button"
            label="close"
            onClick={() => handleCloseModal()}
            className="btn btn-hidden fa fa-times"
          />
        </div>
        <div className="modal-header">
          <div>
            Delete experiments?
          </div>
        </div>
        <div className="modal-content">
          <p id="question-for-delete-exp">
            Are you sure you want to delete the experiment:
            {' '}
            <b>{experiment.name}</b>
          </p>
          <div id="information-div">
            <div id="experiment-status" className="d-flex">
              <p>Status:</p>
              <br />
              <p style={{ color: experimentStatusColor }}>
                <b>{experiment.status}</b>
              </p>
            </div>
            <p id="training-time" />
            <p id="owner">
              Owner:
              {' '}
              <b>{experiment.authorName}</b>
            </p>
          </div>
          <div id="buttons-container">
            <button
              id="cancel-deleting-experiment"
              type="button"
              className="btn btn-danger btn-label-sm mr-2"
              onClick={() => handleCloseModal()}
            >
              Cancel
            </button>
            <button
              id="delete-experiment"
              type="button"
              className="btn btn-danger btn-label-sm mr-2"
              onClick={() => handleDeleteExp(experiment.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

DeleteExperimentModal.propTypes = {
  experiment: shape({
    id: string.isRequired,
    status: string.isRequired,
    name: string.isRequired,
    authorName: string.isRequired,
  }).isRequired,
  handleDeleteExp: func.isRequired,
  handleCloseModal: func.isRequired,
  shouldRender: bool.isRequired,
};

export default DeleteExperimentModal;
