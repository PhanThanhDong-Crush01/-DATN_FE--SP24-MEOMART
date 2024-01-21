import { useRef, useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import type { GetRef, TableColumnsType, TableColumnType } from 'antd';
import { Button, Input, Popconfirm, Space, Table, message } from 'antd';
import type { FilterDropdownProps } from 'antd/es/table/interface';
import Highlighter from 'react-highlight-words';
import { Link } from 'react-router-dom';

type InputRef = GetRef<typeof Input>;

interface DataType {
    key: string;
    name: string;
    price: number;
    category: string;
    image: string;
    sold: number;
    profit: number;
}

type DataIndex = keyof DataType;

const data: DataType[] = [
    {
        key: '1',
        name: 'John Brown',
        category: 'New York No. 1 Lake Park',
        price: 32,
        sold: 727,
        profit: 45,
        image: 'https://laptopdell.com.vn/wp-content/uploads/2022/07/laptop_lenovo_legion_s7_8.jpg',
    },
    {
        key: '2',
        name: 'Joe Black',
        price: 42,
        category: 'London No. 1 Lake Park',
        sold: 727,
        profit: 45,
        image: 'https://laptopdell.com.vn/wp-content/uploads/2022/07/laptop_lenovo_legion_s7_8.jpg',
    },
    {
        key: '3',
        name: 'Jim Green',
        price: 32,
        category: 'Sydney No. 1 Lake Park',
        sold: 727,
        profit: 45,
        image: 'https://laptopdell.com.vn/wp-content/uploads/2022/07/laptop_lenovo_legion_s7_8.jpg',
    },
    {
        key: '4',
        name: 'Jim Red',
        price: 32,
        category: 'London No. 2 Lake Park',
        sold: 727,
        profit: 45,
        image: 'https://laptopdell.com.vn/wp-content/uploads/2022/07/laptop_lenovo_legion_s7_8.jpg',
    },
];
const Product = () => {
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef<InputRef>(null);


    const confirmDelete = async (productId: string) => {
        message.success("xoá thành công")
    };
    const cancelDelete = () => {
        message.error('Product deletion cancelled');
    };

    const handleSearch = (
        selectedKeys: string[],
        confirm: FilterDropdownProps['confirm'],
        dataIndex: DataIndex,
    ) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };

    const handleReset = (clearFilters: () => void) => {
        clearFilters();
        setSearchText('');
    };

    const getColumnSearchProps = (dataIndex: DataIndex): TableColumnType<DataType> => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
            <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
                    style={{ marginBottom: 8, display: 'block' }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({ closeDropdown: false });
                            setSearchText((selectedKeys as string[])[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            close();
                        }}
                    >
                        close
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered: boolean) => (
            <SearchOutlined style={{ color: filtered ? '#1677ff' : undefined }} />
        ),
        onFilter: (value, record) =>
            record[dataIndex]
                .toString()
                .toLowerCase()
                .includes((value as string).toLowerCase()),

        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });

    const columns: TableColumnsType<DataType> = [
        {
            title: '#',
            dataIndex: 'key',
            key: 'key',
            width: '2%',
        },
        {
            title: 'Image',
            dataIndex: 'image',
            key: 'image',
            width: '5%',
            render: (image) => <img src={image} alt="Product" width={70} />,
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            width: '20%',
            ...getColumnSearchProps('name'),
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
            width: '15%',
            ...getColumnSearchProps('category'),
        },
        {
            title: 'price',
            dataIndex: 'price',
            key: 'price',
            width: '10%',
            ...getColumnSearchProps('price'),
            sorter: (a, b) => a.price - b.price,
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Sold',
            dataIndex: 'sold',
            key: 'sold',
            width: '10%',
            ...getColumnSearchProps('sold'),
            sorter: (a, b) => a.sold - b.sold,
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'profit',
            dataIndex: 'profit',
            key: 'profit',
            width: '10%',
            ...getColumnSearchProps('profit'),
            sorter: (a, b) => a.profit - b.profit,
            sortDirections: ['descend', 'ascend'],
            render: (profit) => <p className='text-green-500'>{profit}$</p>,
        },
        {
            title: 'Action',
            dataIndex: '',
            key: 'x',
            width: '15%',
            render: (_, record) => (
                <Space size="middle">
                    <Link to={`/admin/update/${record.key}`}>
                        <Button className='btn-edit text-[#30D200] border-[#31d200cb] hover:text-[#31d200ba] hover:border-[#30D200] active:border-[#30D200]' >Edit</Button>
                    </Link>
                    <Popconfirm
                        title="Are you sure to delete this product?"
                        onConfirm={() => confirmDelete(record.key)}
                        onCancel={cancelDelete}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button type="primary" danger>Delete</Button>
                    </Popconfirm>
                </Space>
            ),
        },

    ];
    return (
        <div>
            <Table columns={columns} dataSource={data} />
        </div>
    )
}

export default Product