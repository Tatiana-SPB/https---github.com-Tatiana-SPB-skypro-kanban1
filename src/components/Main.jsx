import { Column } from "./Column";

export function Main({ loading }) {
  return loading ? (
    <div
      style={{
        color: "green",
        fontSize: "20px",
        fontWeight: 600,
        lineHeight: 1,
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      Данные загружаются
    </div>
  ) : (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            <Column status="Без статуса" />
            <Column status="Нужно сделать" />
            <Column status="В работе" />
            <Column status="Тестирование" />
            <Column status="Готово" />
          </div>
        </div>
      </div>
    </main>
  );
}
