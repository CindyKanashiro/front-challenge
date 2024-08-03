import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./mainContent.module.css";

interface Dashboard {
  id: number;
  name: string;
}

interface Product {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  imagePath: string;
  dashboards: Dashboard[];
}

interface ApiResponse {
  title: string;
  subtitle: string;
  products: Product[];
}

interface MainContentProps {
  navigateTo: (path: string) => void;
}

const MainContent: React.FC<MainContentProps> = ({ navigateTo }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<ApiResponse>("http://localhost:3333/bff");
        if (response.data) {
          const { title, subtitle, products } = response.data;
          setTitle(title);
          setSubtitle(subtitle);
          setProducts(products);
        } else {
          throw new Error("Dados da API estão ausentes ou inválidos.");
        }
      } catch (error) {
        setError("Erro ao buscar dados da API.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleButtonClick = (productTitle: string, dashboardName: string) => {
    if (productTitle === "canais digitais" && dashboardName === "buscas") {
      navigateTo("/dashboard");
    }
  };

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <main className={styles.mainContent}>
      <section className={styles.intro}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <div className={styles.searchBar}>
          <input type="text" placeholder="Informe o nome do dashboard que deseja" />
          <button>Buscar</button>
        </div>
      </section>
      <section className={styles.cards}>
        {products.map((product) => (
          <div key={product.id} className={styles.card}>
            <div className={styles.cardIcon}>😊</div>
            <p className={styles.subheading}>{product.subtitle}</p>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <div className={styles.cardButtons}>
              {product.dashboards.map((dashboard) => (
                <button
                  key={dashboard.id}
                  onClick={() => handleButtonClick(product.title, dashboard.name)}
                  className={
                    product.title === "canais digitais" && dashboard.name === "buscas"
                      ? ""
                      : styles.disabled
                  }
                >
                  {dashboard.name}
                </button>
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default MainContent;
