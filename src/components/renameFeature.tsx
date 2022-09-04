import React from 'react'
import { FaRegArrowAltCircleDown, FaRegArrowAltCircleRight, FaRegFilePdf } from 'react-icons/fa'

const File = ({ children, maxLength = 30 }) => {
  return (
    <div className="flex flex-row items-center">
      <div className="flex-none md:text-xl text-lg text-red-900">
        <FaRegFilePdf />
      </div>
      <div className="md:text-base text-xs ml-2 text-ellipsis overflow-hidden">
        {children}.pdf
      </div>
    </div>
  )
}

const ExplorerWindow = ({ className  = ``, children }) => {
  return (
    <div className={`border-8 border-solid border-neutral-200 box-border select-none ${className}`}>
      <div className="h-4 w-full bg-neutral-200 flex flex-row justify-end">
        <div className="w-2 h-2 rounded-full bg-red-400" />
        <div className="w-2 h-2 rounded-full bg-yellow-400 ml-2" />
        <div className="w-2 h-2 rounded-full bg-green-400 ml-2" />
      </div>
      <div className="grid grid-cols-1 md:gap-4 gap-2 md:p-4 p-2">
        {children}
      </div>
    </div>
  )
}

const RenameFeature = ({ className = `` }) => {
  return (
    <div className={`flex md:flex-row flex-col max-w-screen-xl mx-auto ${className}`}>
      <ExplorerWindow className="flex-1">
        <File>_au_cases_cth_HCA_2022_12</File>
        <File>-2020-sgca-89-pdf</File>
        <File>1999canlii692</File>
        <File>2046</File>
        <File>2046(1)</File>
        <File>document(5).pdf</File>
      </ExplorerWindow>
      <div className="flex-1 px-6 py-4">
        <h3 className="md:text-4xl text-xl font-bold md:mb-8 mb-4">
          Automatically rename downloaded judgments
        </h3>
        <h4 className="md:text-2xl font-semibold">
          apply a standard <code>&lt;case name&gt; &lt;case citation&gt;.pdf</code> naming system
        </h4>
        <div className="md:text-5xl text-2xl md:mt-6 mt-3 text-neutral-400 flex flex-row justify-center">
          <FaRegArrowAltCircleRight className="md:block hidden" />
          <FaRegArrowAltCircleDown className="block md:hidden" />
        </div>
      </div>
      <ExplorerWindow className="flex-1">
        <File>Kozarov v Victoria [2022] HCA 12</File>
        <File>Lim Zhipeng v Seow Suat Thin [2020] SGCA 89</File>
        <File>Bazley v Curry [1999] 2 SCR 534</File>
        <File>Create Financial Management v Lee [2020] EWHC 2046 (QB)</File>
        <File>Red Bull v Sun Mark [2012] EWHC 2046 (Ch)</File>
        <File>Sabel v Puma, Rudolf Dassler Sport C-251 95 - Opinion</File>
      </ExplorerWindow>
    </div>
  )
}

export default RenameFeature