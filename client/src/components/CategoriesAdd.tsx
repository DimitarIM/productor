import { TagIcon } from 'lucide-react';
import { useCategoryStore } from '../store/useCategoryStore';

function CategoriesAdd() {
    const { addCategory, formData, setFormData } = useCategoryStore();

    return (
        <div className='absolute bottom-[-45px] right-0'>
            <form data-testid="form" onSubmit={addCategory} className="flex justify-center items-center gap-3">
                <div className="form-control">
                    <div className="relative flex items-center justify-center">
                        <div className="absolute pb-1 left-0 pl-2 pt-[5px] flex items-center pointer-events-none text-light z-20">
                            <TagIcon className="size-6" />
                        </div>
                        <input
                            type="text"
                            placeholder="Add category"
                            className="input input-bordered w-full max-w-[200px] pl-10 focus:input-primary transition-colors duration-200"
                            value={formData.name}
                            onChange={(event) => setFormData({ ...formData, name: event.target.value })} />
                    </div>
                </div>
            </form>
        </div>

    );
}

export default CategoriesAdd

