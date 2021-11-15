export default function ComboBox(props) {
  return (
    <>
      <label id="ex2-label" class="combobox-label">
        {props.label}
      </label>

      <div class="combobox-wrapper">
        <div
        //   role="combobox"
        //   aria-expanded="false"
        //   aria-owns="ex2-listbox"
        //   aria-haspopup="listbox"
          id="ex2-combobox"
        >
          <input
            type="text"
            // aria-autocomplete="list"
            // aria-controls="ex2-listbox"
            // aria-labelledby="ex2-label"
            id="ex2-input"
          />
        </div>
        <ul
        //   aria-labelledby="ex2-label"
        //   role="listbox"
          id="ex2-listbox"
          class="listbox hidden"
        >
            {props.items.map((item) => (
                <li>{item.text}</li>
            ))}
        </ul>
      </div>
    </>
  );
}
