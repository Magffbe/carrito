import Nav from "@/components/Navegacion/Nav";
import ProviderProducto from "@/Context/ProviderProducto";
import "bootstrap/dist/css/bootstrap.min.css";


export default function LayoutCart({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <ProviderProducto>
      <main>
    <Nav/>
      {children}
      </main>
    </ProviderProducto>
   
    
  );
}