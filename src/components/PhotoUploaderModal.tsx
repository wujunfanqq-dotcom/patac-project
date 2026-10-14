import React, { useState } from 'react';
import { VISUAL_ASSETS } from '../data/patacData';
import { X, Upload, Check, RotateCcw, Image, AlertCircle, FileCheck } from 'lucide-react';

interface PhotoUploaderModalProps {
  isOpen: boolean;
  onClose: () => void;
  customImages: Record<string, string>;
  onSaveCustomImage: (assetId: string, base64Url: string) => void;
  onResetImage: (assetId: string) => void;
  onResetAll: () => void;
}

export const PhotoUploaderModal: React.FC<PhotoUploaderModalProps> = ({
  isOpen,
  onClose,
  customImages,
  onSaveCustomImage,
  onResetImage,
  onResetAll
}) => {
  if (!isOpen) return null;

  const handleFileChange = (assetId: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        onSaveCustomImage(assetId, reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
      onClick={onClose}
    >
      <div 
        className="relative max-w-4xl w-full bg-neutral-950 border border-neutral-800 rounded-xs shadow-2xl flex flex-col max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-neutral-900 border-b border-neutral-800 px-5 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="p-1.5 bg-amber-500 text-neutral-950 rounded-xs font-mono font-bold text-xs">
              PDF ASSET MANAGER
            </span>
            <h3 className="text-sm sm:text-base font-bold text-neutral-100 font-mono">
              现场实拍原图管理与一键替换
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-neutral-100 bg-neutral-950 border border-neutral-800 rounded-xs"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Informative notice */}
        <div className="p-4 bg-amber-500/10 border-b border-amber-500/30 text-xs font-mono text-neutral-300 flex items-start gap-3">
          <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <span className="text-amber-400 font-bold">提示说明：</span>
            <span>
              网页现已切换为严格按照您 PDF 现场细节 1:1 还原的真实无品牌现场照。如您手头有 PDF 中的原始高清原图文件（JPG/PNG），可直接在下方对应卡片点击<strong>“上传原图”</strong>，页面将即刻 100% 显示您自己的原始文件并自动保存在本地！
            </span>
          </div>
        </div>

        {/* Content Slots */}
        <div className="p-5 overflow-y-auto space-y-4 flex-1">
          <div className="flex items-center justify-between pb-2 text-xs font-mono text-neutral-400">
            <span>PDF 需求规范书对应 5 大现场实拍位：</span>
            <button
              onClick={onResetAll}
              className="text-neutral-400 hover:text-amber-400 flex items-center gap-1 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>重置所有自定义图片</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {VISUAL_ASSETS.map((asset) => {
              const hasCustom = !!customImages[asset.id];
              const displaySrc = customImages[asset.id] || asset.src;

              return (
                <div
                  key={asset.id}
                  className="p-3.5 bg-neutral-900 border border-neutral-800 rounded-xs flex gap-3.5 items-center"
                >
                  {/* Thumbnail */}
                  <div className="w-24 h-24 bg-neutral-950 border border-neutral-800 rounded-xs overflow-hidden shrink-0 relative">
                    {displaySrc.includes('.pdf') ? (
                      <div className="w-full h-full bg-slate-200 flex items-center justify-center text-xs font-mono text-slate-500 font-bold">PDF</div>
                    ) : (
                      <img
                        src={displaySrc}
                        alt={asset.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    )}
                    {hasCustom && (
                      <span className="absolute top-1 right-1 px-1 bg-emerald-500 text-neutral-950 text-[9px] font-mono font-bold rounded-xs">
                        已替换原图
                      </span>
                    )}
                  </div>

                  {/* Info and action */}
                  <div className="flex-1 min-w-0 flex flex-col justify-between h-24">
                    <div>
                      <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-neutral-200 truncate">
                        <span className="text-amber-400 font-mono-tech">{asset.figureNumber}</span>
                        <span className="truncate">{asset.title}</span>
                      </div>
                      <div className="text-[10px] font-mono text-neutral-400 mt-1 truncate">
                        {asset.subtitle}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 pt-2">
                      <label className="px-2.5 py-1 bg-amber-500 hover:bg-amber-400 text-neutral-950 text-xs font-mono font-bold rounded-xs cursor-pointer flex items-center gap-1 transition-colors">
                        <Upload className="w-3.5 h-3.5" />
                        <span>上传本地原图</span>
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => handleFileChange(asset.id, e)}
                        />
                      </label>

                      {hasCustom && (
                        <button
                          onClick={() => onResetImage(asset.id)}
                          className="p-1 bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-neutral-200 rounded-xs transition-colors"
                          title="恢复预设"
                        >
                          <RotateCcw className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-neutral-900 border-t border-neutral-800 px-5 py-3 flex items-center justify-between text-xs font-mono text-neutral-400">
          <span>支持格式：JPG, PNG, WEBP · 上传后即时生效</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 font-mono rounded-xs"
          >
            完成并关闭
          </button>
        </div>
      </div>
    </div>
  );
};
