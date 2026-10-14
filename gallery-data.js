/*
  فقط همین فایل را برای مدیریت دسته‌بندی‌ها و عکس‌ها ویرایش کن.
  پوشه جدید: یک شیء جدید با name و children/photos اضافه کن.
  عکس جدید: یک شیء به آرایه photos همان پوشه اضافه کن.
  imageUrl: لینک قابل نمایش مستقیم تصویر از OneDrive/SharePoint
  downloadUrl: اختیاری؛ اگر خالی باشد از imageUrl استفاده می‌شود.
*/
window.GALLERY_CONFIG = {
  title: "آرشیو تصاویر نوین",
  subtitle: "برای دیدن عکس‌ها، پوشه‌ها را از سمت راست انتخاب کن.",
  folders: [
    {
      name: "دسته‌بندی نمونه",
      children: [
        {
          name: "پرونده نمونه ۱",
          photos: [
            {
              title: "تصویر نمونه",
              description: "این نمونه را با لینک عکس خودت جایگزین کن.",
              imageUrl: "https://placehold.co/900x650/png?text=Replace+with+OneDrive+image+URL",
              downloadUrl: "https://placehold.co/900x650/png?text=Replace+with+OneDrive+image+URL"
            }
          ]
        },
        {
          name: "پرونده نمونه ۲",
          photos: []
        }
      ],
      photos: []
    },
    {
      name: "دسته‌بندی دوم",
      children: [],
      photos: []
    }
  ]
};
