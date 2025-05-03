import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { PlusIcon, X } from 'lucide-react';
import React, { useState } from 'react';

const ProductForm = ({ product, onSubmit }) => {
  // Initialize form state with product data or default values
  const [formData, setFormData] = useState({
    name: product?.name || '',
    type: product?.type || '',
    description: product?.description || '',
    image: product?.image || '',
    region: product?.region || '',
    variants: product?.variants || [{ label: '', value: '', price: '' }]
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle select changes
  const handleSelectChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle variant changes
  const handleVariantChange = (index, field, value) => {
    const updatedVariants = [...formData.variants];
    updatedVariants[index] = { ...updatedVariants[index], [field]: field === 'price' ? Number(value) : value };
    setFormData(prev => ({ ...prev, variants: updatedVariants }));
  };

  // Add new variant
  const addVariant = () => {
    setFormData(prev => ({
      ...prev,
      variants: [...prev.variants, { label: '', value: '', price: '' }]
    }));
  };

  // Remove variant
  const removeVariant = (index) => {
    if (formData.variants.length > 1) {
      const updatedVariants = formData.variants.filter((_, i) => i !== index);
      setFormData(prev => ({ ...prev, variants: updatedVariants }));
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">ชื่อสินค้า</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="type">ประเภท</Label>
          <Select
            value={formData.type}
            onValueChange={(value) => handleSelectChange('type', value)}
          >
            <SelectTrigger id="type">
              <SelectValue placeholder="เลือกประเภทสินค้า" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ข้าวเพื่อสุขภาพ">ข้าวเพื่อสุขภาพ</SelectItem>
              <SelectItem value="ข้าวขาว">ข้าวขาว</SelectItem>
              <SelectItem value="ข้าวหอมมะลิ">ข้าวหอมมะลิ</SelectItem>
              <SelectItem value="ข้าวเหนียว">ข้าวเหนียว</SelectItem>
              <SelectItem value="สินค้าแปรรูป">สินค้าแปรรูป</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">รายละเอียด</Label>
        <Textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={3}
        />
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="image">รูปภาพ (URL)</Label>
          <Input
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="assets/example.webp"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="region">ภูมิภาค</Label>
          <Select
            value={formData.region}
            onValueChange={(value) => handleSelectChange('region', value)}
          >
            <SelectTrigger id="region">
              <SelectValue placeholder="เลือกภูมิภาค" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ภาคเหนือ">ภาคเหนือ</SelectItem>
              <SelectItem value="ภาคกลาง">ภาคกลาง</SelectItem>
              <SelectItem value="ภาคอีสาน">ภาคอีสาน</SelectItem>
              <SelectItem value="ภาคใต้">ภาคใต้</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label>ตัวเลือกสินค้า (Variants)</Label>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={addVariant}
            className="flex items-center gap-1"
          >
            <PlusIcon className="w-4 h-4" /> เพิ่มตัวเลือก
          </Button>
        </div>

        {formData.variants.map((variant, index) => (
          <div key={index} className="flex items-end gap-2 mt-2">
            <div className="flex-1 space-y-1">
              <Label htmlFor={`variant-label-${index}`}>ชื่อตัวเลือก</Label>
              <Input
                id={`variant-label-${index}`}
                value={variant.label}
                onChange={(e) => handleVariantChange(index, 'label', e.target.value)}
                placeholder="เช่น 1 กิโลกรัม"
              />
            </div>
            <div className="flex-1 space-y-1">
              <Label htmlFor={`variant-value-${index}`}>รหัสตัวเลือก</Label>
              <Input
                id={`variant-value-${index}`}
                value={variant.value}
                onChange={(e) => handleVariantChange(index, 'value', e.target.value)}
                placeholder="เช่น 1kg"
              />
            </div>
            <div className="flex-1 space-y-1">
              <Label htmlFor={`variant-price-${index}`}>ราคา (บาท)</Label>
              <Input
                id={`variant-price-${index}`}
                type="number"
                value={variant.price}
                onChange={(e) => handleVariantChange(index, 'price', e.target.value)}
                placeholder="0"
              />
            </div>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => removeVariant(index)}
              disabled={formData.variants.length <= 1}
              className="mb-0.5"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        ))}
      </div>

      <div className="flex justify-end">
        <Button className="bg-accent-foreground hover:bg-accent-foreground/90" type="submit">บันทึก</Button>
      </div>
    </form>
  );
};

export default ProductForm;