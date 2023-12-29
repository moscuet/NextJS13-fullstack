export default function layout({
    children,
  }: {
    children: React.ReactNode
  }){
    return<div className="pt-12 px-4">
        {children}
    </div>
  }