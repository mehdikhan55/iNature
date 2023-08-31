import React from 'react'
import styles from './PreviewModal.module.css'
import Modal from 'react-modal';
import { CloseOutlined } from '@ant-design/icons';

export default function PreviewModal({ previewMode, setPreviewMode, togglePreviewModal, showPreviewModal, setShowPreviewModal }) {


    return (
        <Modal
            ariaHideApp={false}
            onRequestClose={() => togglePreviewModal()}
            isOpen={showPreviewModal}
            className={`${styles.modal}`}
            overlayClassName={`${styles.overlay}`}
            contentLabel='Select Preview Mode'
        >


            <div className="flex w-[60%] h-[60%] bg-white flex-col gap-2 rounded-2xl relative p-6">

                <button onClick={() => togglePreviewModal()} className='flex align-items-center justify-center cursor-pointer absolute top-2 right-4 p-1 border-2 border-black  bg-black text-white '>
                    <CloseOutlined />
                </button>

                <h2 className='text-center font-bold text-2xl'>Select Preview Mode</h2>
                <div>
                    <h4 className='font-bold mt-14 mb-3 text-center'>Selected: {previewMode}</h4>
                </div>

                <div className=' w-full flex justify-around flex-1'>

                    <button onClick={() => setPreviewMode('single')}
                    className='w-[40%] rounded-lg  h-[80%] bg-gray-400 border-2 border-black relative'>
                        <h2 className='font-bold'>Single</h2>
                        <div
                            className={`${previewMode === 'single' ? 'bg-black' : 'bg-white'} absolute bottom-1 right-1  border-2 border-black w-[10%] h-[20%] rounded-full`} />
                    </button>

                    <button onClick={() => setPreviewMode('compare')}
                    className='w-[40%] h-[80%] bg-gray-400 border-2 border-black relative'>
                        <h2 className='font-bold'>Compare</h2>
                        <div
                            className={`${previewMode !== 'single' ? 'bg-black' : 'bg-white'} absolute bottom-1 right-1  border-2 border-black w-[10%] h-[20%] rounded-full`} />
                    </button>

                </div>

            </div>

        </Modal>
    )
}
