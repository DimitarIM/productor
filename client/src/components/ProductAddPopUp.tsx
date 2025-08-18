import { createPortal } from "react-dom"
import { useProductStore } from "../store/useProductStore"
import { DollarSignIcon, ImageIcon, Package2Icon, PlusCircleIcon, TagIcon } from "lucide-react";

function ProductAddPopUp({ setModal }: { setModal: (state: boolean) => void }) {
  const { addProduct, setFormData, resetFormData, formData, loading } = useProductStore();

  return createPortal(
    <dialog className="fixed flex justify-center items-center inset-0 h-screen w-screen bg-bg-shadowed z-[100]">
      <div className="flex flex-col relative z-[100] bg-bg-secondary text-primary w-full h-full max-w-[400px] max-h-[500px] rounded-[20px] shadow-[0px_0px_17px_2px_rgba(234,_194,_237,0.1)]">
        <form method="dialog">
          <button onClick={() => setModal(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 hover:bg-light hover:text-bg-secondary">X</button>
        </form>
        <h3 className="font-bold text-xl pt-2 pl-5">Add New Product</h3>

        <form onSubmit={addProduct} className="p-6">
          <div className="grid gap-6">
            {/* Set Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base font-medium">
                  Product Name
                </span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-light z-20">
                  <Package2Icon className="size-5" />
                </div>
                <input
                  type="text"
                  placeholder="Enter product name"
                  className="input input-bordered w-full pl-10 py-3 focus:input-primary transition-colors duration-200"
                  value={formData.name}
                  onChange={(event) => setFormData({ ...formData, name: event.target.value })} />
              </div>
            </div>
            {/* Set Price */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base font-medium">Price</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-light z-20">
                  <DollarSignIcon className="size-5" />
                </div>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  placeholder="0.00"
                  className="input input-bordered w-full pl-10 py-3 focus:input-primary transition-colors duration-200"
                  value={formData.price}
                  onChange={(event) => setFormData({ ...formData, price: Number(event.target.value) })}
                />
              </div>
            </div>
            {/* Set Image */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base font-medium">Image URL</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-light z-20">
                  <ImageIcon className="size-5" />
                </div>
                <input
                  type="text"
                  placeholder="https://example.com/image.jpg"
                  className="input input-bordered w-full pl-10 py-3 focus:input-primary transition-colors duration-200"
                  value={formData.image}
                  onChange={(event) => setFormData({ ...formData, image: event.target.value })}
                />
              </div>
            </div>
            {/* Set Category */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base font-medium">
                  Product Category
                </span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-light z-20">
                  <TagIcon className="size-5" />
                </div>
                <input
                  type="text"
                  placeholder="Enter product category"
                  className="input input-bordered w-full pl-10 py-3 focus:input-primary transition-colors duration-200"
                  value={formData.category}
                  onChange={(event) => setFormData({ ...formData, category: event.target.value })} />
              </div>
            </div>

            <div className="modal-action">
              <form method="dialog">
                <button
                  onClick={() => resetFormData()}
                  className="btn btn-ghost hover:bg-light hover:text-bg-secondary">Reset</button>
              </form>
              <button
                type="submit"
                className="btn bg-light text-bg-secondary border-primary disabled:border-none min-w-[120px]"
                disabled={!formData.name || !formData.price || !formData.image || !formData.category || loading}
              >
                {loading ? (
                  <span className="loading loading-spinner loading-sm" />
                ) : (
                  <>
                    <PlusCircleIcon data-testid="product-button" className="size-5 mr-2" />
                    Add Product
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
      <button className="absolute w-full h-full" onClick={() => setModal(false)}></button>
    </dialog>,
    document.getElementById("modal-root") as HTMLElement
  )
}

export default ProductAddPopUp