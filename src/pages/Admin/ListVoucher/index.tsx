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
    status: string;
    codeVc: number;
    decrease: number;
    expiry: string;
    conditions: number;
    idTypeVc: string;
}

type DataIndex = keyof DataType;

const data: DataType[] = [
    {
        key: '1',
        status: 'John Brown',
        codeVc: 20,
        decrease: 32,
        expiry: "abcd èhkkjj",
        conditions: 45,
        idTypeVc: 'idtype123o3i',
    },
    {
        key: '2',
        status: 'John Brown',
        codeVc: 20,
        decrease: 32,
        expiry: "abcd èhkkjj",
        conditions: 45,
        idTypeVc: 'idtype123o3i',
    },
];
const Vorcher = () => {
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
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            width: '20%',
        },
        {
            title: 'codeVc',
            dataIndex: 'codeVc',
            key: 'codeVc',
            width: '20%',
            ...getColumnSearchProps('codeVc'),
        },
        {
            title: 'decrease',
            dataIndex: 'decrease',
            key: 'decrease',
            width: '10%',
            ...getColumnSearchProps('decrease'),
        },
        {
            title: 'expiry',
            dataIndex: 'expiry',
            key: 'expiry',
            width: '20%',
            ...getColumnSearchProps('expiry'),
            sorter: (a, b) => a.expiry.length - b.expiry.length,
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'conditions',
            dataIndex: 'conditions',
            key: 'conditions',
            width: '10%',
            ...getColumnSearchProps('conditions'),
            sorter: (a, b) => a.conditions - b.conditions,
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'idTypeVc',
            dataIndex: 'idTypeVc',
            key: 'idTypeVc',
            width: '20%',
            ...getColumnSearchProps('idTypeVc'),
            sorter: (a, b) => a.idTypeVc.length - b.idTypeVc.length,
            sortDirections: ['descend', 'ascend'],
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
            <Table className='text-center' columns={columns} bordered dataSource={data} />
        </div>
    )
}

export default Vorcher